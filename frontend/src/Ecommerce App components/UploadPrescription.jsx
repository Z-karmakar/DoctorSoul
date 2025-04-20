import React, { useState, useRef } from "react";
import FilePreviewArea from "./FilePreviewArea";

const UploadPrescription = () => {
   // State for file upload handling
   const [files, setFiles] = useState([]);
   const [dragActive, setDragActive] = useState(false);
   const [uploadProgress, setUploadProgress] = useState(0);
   const [uploadStatus, setUploadStatus] = useState(null);
   const fileInputRef = useRef(null);

   // Configuration for file uploads
   const config = {
      maxFileSize: 100, // Maximum file size in MB
      maxFiles: 5, // Maximum number of files allowed
      supportedFileTypes: [
         { extension: "jpg", mimeType: "image/jpg", description: "JPG Image" },
         { extension: "jpeg", mimeType: "image/jpeg", description: "JPEG Image" },
         { extension: "png", mimeType: "image/png", description: "PNG Image" },
         {
            extension: "pdf",
            mimeType: "application/pdf",
            description: "PDF Document",
         },
         { extension: "heic", mimeType: "image/heic", description: "HEIC Image" },
      ],
   };

   // Handle file selection from input
   const handleFileSelect = (e) => {
      const selectedFiles = Array.from(e.target.files || []);
      processFiles(selectedFiles);
   };

   // Handle drag events
   const handleDrag = (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (e.type === "dragenter" || e.type === "dragover") {
         setDragActive(true);
      } else if (e.type === "dragleave") {
         setDragActive(false);
      }
   };

   // Handle drop event
   const handleDrop = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);

      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
         const droppedFiles = Array.from(e.dataTransfer.files);
         processFiles(droppedFiles);
      }
   };

   // Process and validate the selected files
   const processFiles = (selectedFiles) => {
      // Check if adding would exceed max files
      if (files.length + selectedFiles.length > config.maxFiles) {
         setUploadStatus({
            type: "error",
            message: `You can upload a maximum of ${config.maxFiles} files.`,
         });
         return;
      }

      // Validate each file
      const validatedFiles = selectedFiles.map((file) => {
         // Check file type
         const fileExtension = file.name.split(".").pop().toLowerCase();
         const isValidType = config.supportedFileTypes.some(
            (type) =>
               type.extension === fileExtension || type.mimeType === file.type
         );

         // Check file size (convert from bytes to MB)
         const fileSizeInMB = file.size / (1024 * 1024);
         const isValidSize = fileSizeInMB <= config.maxFileSize;

         return {
            file,
            name: file.name,
            size: fileSizeInMB.toFixed(2),
            type: file.type,
            isValid: isValidType && isValidSize,
            error: !isValidType
               ? "Unsupported file format"
               : !isValidSize
                  ? `File exceeds ${config.maxFileSize}MB limit`
                  : null,
         };
      });

      // Filter out invalid files
      const newValidFiles = validatedFiles.filter((file) => file.isValid);

      // Show error if there were invalid files
      if (newValidFiles.length < validatedFiles.length) {
         setUploadStatus({
            type: "warning",
            message:
               "Some files were not added due to unsupported format or size limits.",
         });
      }

      // Add valid files to state
      setFiles((prevFiles) => [...prevFiles, ...newValidFiles]);
   };

   // Remove a file from the list
   const removeFile = (indexToRemove) => {
      setFiles((prevFiles) =>
         prevFiles.filter((_, index) => index !== indexToRemove)
      );
   };

   // Clear all files
   const clearFiles = () => {
      setFiles([]);
      setUploadStatus(null);
      setUploadProgress(0);
   };

   // Simulate file upload process
   const uploadFiles = () => {
      if (files.length === 0) {
         setUploadStatus({
            type: "error",
            message: "Please select at least one file to upload.",
         });
         return;
      }

      // Reset status
      setUploadStatus({
         type: "info",
         message: "Uploading prescription files...",
      });

      // Simulate progress
      setUploadProgress(0);
      const interval = setInterval(() => {
         setUploadProgress((prev) => {
            if (prev >= 100) {
               clearInterval(interval);
               setUploadStatus({
                  type: "success",
                  message:
                     "Upload complete! Our pharmacist will review your prescription.",
               });
               return 100;
            }
            return prev + 5;
         });
      }, 200);
   };

   // Format file size for display
   const formatFileSize = (size) => {
      return `${size} MB`;
   };

   return (
      <section id="upload-prescription" className="container mx-auto px-4 pt-28 mb-6">
         <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl overflow-hidden shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
               <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                     Upload Your Prescription
                  </h2>
                  <p className="text-gray-600 mb-6">
                     Simply upload your prescription and we'll deliver your medications
                     right to your doorstep.
                  </p>

                  {/* File upload area */}
                  <div
                     className={`border-2 border-dashed rounded-lg p-6 mb-4 transition-colors ${dragActive
                           ? "bg-green-50 border-green-400"
                           : "border-gray-300 bg-white"
                        }`}
                     onDragEnter={handleDrag}
                     onDragLeave={handleDrag}
                     onDragOver={handleDrag}
                     onDrop={handleDrop}
                  >
                     <div className="text-center">
                        <span className="text-4xl mb-2 block">📄</span>
                        <p className="font-medium text-gray-700 mb-1">
                           Drag and drop your files here
                        </p>
                        <p className="text-sm text-gray-500 mb-4">or click to browse</p>

                        <input
                           ref={fileInputRef}
                           type="file"
                           multiple
                           accept={config.supportedFileTypes
                              .map((type) => type.mimeType)
                              .join(",")}
                           onChange={handleFileSelect}
                           className="hidden"
                        />

                        <button
                           onClick={() => fileInputRef.current.click()}
                           className="bg-green-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-700 transition-colors hover:cursor-pointer"
                        >
                           Browse Files
                        </button>

                        <div className="mt-4 text-xs text-gray-500">
                           <p>
                              Supported formats:{" "}
                              {config.supportedFileTypes
                                 .map((type) => type.extension.toUpperCase())
                                 .join(", ")}
                           </p>
                           <p>Maximum file size: {config.maxFileSize}MB</p>
                           <p>Maximum files: {config.maxFiles}</p>
                        </div>
                     </div>
                  </div>

                  {/* Status message */}
                  {uploadStatus && (
                     <div
                        className={`mb-4 p-3 rounded-lg ${uploadStatus.type === "error"
                              ? "bg-red-100 text-red-700"
                              : uploadStatus.type === "success"
                                 ? "bg-green-100 text-green-700"
                                 : uploadStatus.type === "warning"
                                    ? "bg-yellow-100 text-yellow-700"
                                    : "bg-blue-100 text-blue-700"
                           }`}
                     >
                        {uploadStatus.message}
                     </div>
                  )}

                  {/* File list */}
                  {files.length > 0 && (
                     <div className="mb-4">
                        <h3 className="font-medium text-gray-700 mb-2">
                           Selected Files:
                        </h3>
                        <ul className="space-y-2 max-h-40 overflow-y-auto">
                           {files.map((fileObj, index) => (
                              <li
                                 key={index}
                                 className="flex justify-between items-center bg-white p-2 rounded-lg shadow-sm"
                              >
                                 <div className="flex items-center">
                                    <span className="text-lg mr-2">
                                       {fileObj.type.includes("image")
                                          ? "🖼️"
                                          : fileObj.type.includes("pdf")
                                             ? "📄"
                                             : "📑"}
                                    </span>
                                    <div>
                                       <p className="text-sm font-medium truncate max-w-xs">
                                          {fileObj.name}
                                       </p>
                                       <p className="text-xs text-gray-500">
                                          {formatFileSize(fileObj.size)}
                                       </p>
                                    </div>
                                 </div>
                                 <button
                                    onClick={() => removeFile(index)}
                                    className="text-red-500 hover:text-red-700"
                                    aria-label="Remove file"
                                 >
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="16"
                                       height="16"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       stroke="currentColor"
                                       strokeWidth="2"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                    >
                                       <path d="M18 6L6 18"></path>
                                       <path d="M6 6l12 12"></path>
                                    </svg>
                                 </button>
                              </li>
                           ))}
                        </ul>
                     </div>
                  )}

                  {/* Progress bar */}
                  {uploadProgress > 0 && (
                     <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                        <div
                           className="bg-green-600 h-2.5 rounded-full transition-all"
                           style={{ width: `${uploadProgress}%` }}
                        ></div>
                     </div>
                  )}

                  {/* Action buttons */}
                  <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
                     <button
                        onClick={uploadFiles}
                        className="flex-1 bg-green-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                        disabled={
                           files.length === 0 ||
                           (uploadProgress > 0 && uploadProgress < 100)
                        }
                     >
                        Upload Now
                     </button>
                     {files.length > 0 && (
                        <button
                           onClick={clearFiles}
                           className="flex-1 border border-red-300 text-red-600 font-medium py-3 px-6 rounded-lg hover:bg-red-50 transition-colors"
                        >
                           Clear All
                        </button>
                     )}
                  </div>
               </div>

               <FilePreviewArea files={files} />
            </div>
         </div>
      </section>
   );
};

export default UploadPrescription;
