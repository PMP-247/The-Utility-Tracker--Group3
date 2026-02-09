export default function EvidenceUploader() {
  return (
    <div className="mb-4">
      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-400 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <p className="mb-2 text-sm text-gray-600">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500">PNG, JPG or PDF (MAX. 10MB)</p>
        </div>

        <input 
          name="evidence" 
          type="file" 
          className="hidden" 
          onChange={(e) => console.log("File selected:", e.target.files[0])} 
        />
      </label>
    </div>
  );
}