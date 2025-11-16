import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Alert, AlertDescription } from './ui/alert';
import { Upload, FileSpreadsheet, Check, AlertCircle, RefreshCw } from 'lucide-react';

interface UploadResponse {
  success: boolean;
  message: string;
  apartmentsAdded: number;
  totalApartments: number;
  error?: string;
  details?: string;
}

export const ExcelUploader: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [mode, setMode] = useState<'replace' | 'update'>('update');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<UploadResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // Validate file type
      const validTypes = [
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'text/csv'
      ];
      
      if (validTypes.includes(selectedFile.type) || selectedFile.name.endsWith('.xlsx') || selectedFile.name.endsWith('.xls')) {
        setFile(selectedFile);
        setError(null);
        setResponse(null);
      } else {
        setError('Please select a valid Excel file (.xlsx, .xls, or .csv)');
        setFile(null);
      }
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file first');
      return;
    }

    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('mode', mode);

      const uploadResponse = await fetch('http://localhost:3010/api/upload-excel', {
        method: 'POST',
        body: formData,
      });

      const data: UploadResponse = await uploadResponse.json();

      if (uploadResponse.ok) {
        setResponse(data);
        setFile(null);
        // Clear file input
        const fileInput = document.getElementById('file-upload') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      } else {
        // Show detailed error with stack trace
        const errorMsg = data.error || 'Failed to upload file';
        const details = data.details ? `\n\nDetails: ${data.details}` : '';
        setError(errorMsg + details);
        console.error('Upload error:', data);
      }
    } catch (err: any) {
      console.error('Upload error:', err);
      setError(err.message || 'Failed to connect to upload server. Make sure the server is running on port 3010.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <Card className="p-6 max-w-2xl mx-auto">
        <div className="space-y-6">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <FileSpreadsheet className="h-12 w-12 text-blue-500" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Excel Data Uploader</h2>
          <p className="text-gray-600">
            Upload Excel files to automatically generate or update apartment listing data
          </p>
        </div>

        {/* Mode Selection */}
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">Upload Mode</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setMode('update')}
              className={`p-4 border-2 rounded-lg transition-all ${
                mode === 'update'
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <RefreshCw className="h-5 w-5" />
                <span className="font-semibold">Update</span>
              </div>
              <p className="text-xs mt-2 text-gray-600">
                Add new data to existing apartments
              </p>
            </button>
            
            <button
              onClick={() => setMode('replace')}
              className={`p-4 border-2 rounded-lg transition-all ${
                mode === 'replace'
                  ? 'border-red-500 bg-red-50 text-red-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <Upload className="h-5 w-5" />
                <span className="font-semibold">Replace</span>
              </div>
              <p className="text-xs mt-2 text-gray-600">
                Replace all existing data
              </p>
            </button>
          </div>
        </div>

        {/* File Upload */}
        <div className="space-y-3">
          <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700">
            Select Excel File
          </label>
          <div className="flex items-center space-x-3">
            <label
              htmlFor="file-upload"
              className="flex-1 flex items-center justify-center px-4 py-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-400 transition-colors"
            >
              <div className="text-center">
                <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                <span className="text-sm text-gray-600">
                  {file ? file.name : 'Click to select Excel file'}
                </span>
                <p className="text-xs text-gray-500 mt-1">
                  Supports .xlsx, .xls, and .csv
                </p>
              </div>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                accept=".xlsx,.xls,.csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>

        {/* Upload Button */}
        <Button
          onClick={handleUpload}
          disabled={!file || loading}
          className="w-full"
          size="lg"
        >
          {loading ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <Upload className="mr-2 h-4 w-4" />
              {mode === 'update' ? 'Update Data' : 'Replace Data'}
            </>
          )}
        </Button>

        {/* Response Messages */}
        {response && (
          <Alert className="bg-green-50 border-green-200">
            <Check className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              <div className="font-semibold mb-1">{response.message}</div>
              <div className="text-sm">
                • Added: {response.apartmentsAdded} apartments
                <br />
                • Total: {response.totalApartments} apartments
              </div>
              <div className="mt-3 p-3 bg-green-100 border border-green-300 rounded-md">
                <div className="font-semibold text-green-900 mb-2">⚠️ IMPORTANT: Hard Refresh Required</div>
                <div className="text-xs text-green-800 space-y-1">
                  <div>To see the updated data on the Map View, you MUST do a <strong>hard refresh</strong>:</div>
                  <div className="font-mono bg-white px-2 py-1 rounded border border-green-200 inline-block">
                    Mac: Cmd + Shift + R
                  </div>
                  <div className="font-mono bg-white px-2 py-1 rounded border border-green-200 inline-block ml-2">
                    Windows: Ctrl + Shift + R
                  </div>
                  <div className="mt-2">This clears the browser cache and loads the new data.</div>
                </div>
              </div>
            </AlertDescription>
          </Alert>
        )}

        {error && (
          <Alert className="bg-red-50 border-red-200">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              <div className="font-semibold mb-1">Error</div>
              <div className="text-sm whitespace-pre-wrap">{error}</div>
              {error.includes('connect') && (
                <div className="mt-2 text-xs text-red-700">
                  💡 Make sure to run the upload server: <code className="bg-red-100 px-1 rounded">node server.js</code>
                </div>
              )}
              <div className="mt-3 pt-3 border-t border-red-300">
                <div className="text-xs text-red-700 font-semibold mb-2">🔍 Debug Steps:</div>
                <ol className="text-xs text-red-700 space-y-1 list-decimal list-inside">
                  <li>Open <code className="bg-red-100 px-1 rounded">test-upload.html</code> in your browser</li>
                  <li>Try uploading there to see detailed server logs</li>
                  <li>Check the "Server Logs (Live)" section for the actual error</li>
                </ol>
              </div>
            </AlertDescription>
          </Alert>
        )}

        {/* Instructions */}
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-2">📝 Instructions</h3>
          <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
            <li>Make sure the upload server is running: <code className="bg-blue-100 px-1 rounded">node server.js</code></li>
            <li>Select your Excel file containing apartment data</li>
            <li>Choose "Update" to add to existing data or "Replace" to start fresh</li>
            <li>Click upload and wait for confirmation</li>
            <li>Refresh your application to see the new data!</li>
          </ol>
          <div className="mt-3 text-xs text-blue-700">
            <strong>Supported Columns:</strong> Property Address, Bedrooms, Bathrooms, SF (sqft), 
            FY25 (rent), Property Type, Portfolio, Target Tenant, Unit, and more...
          </div>
        </div>
        </div>
      </Card>
    </div>
  );
};

