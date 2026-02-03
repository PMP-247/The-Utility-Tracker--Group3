export default function EvidenceUploader() {
  return (
    <div className="mb-4 border-dashed border-2 border-gray-400 p-4 text-center rounded">
      <p className="text-gray-600">Drag & drop files here or click to upload</p>
      <input type="file" className="hidden" />
    </div>
  );
}
