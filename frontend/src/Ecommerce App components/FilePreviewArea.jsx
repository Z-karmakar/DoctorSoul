import React, { useState, useEffect } from "react";

const FilePreviewArea = ({ files }) => {
   const [activeFileIndex, setActiveFileIndex] = useState(0);

   // When files array changes, reset to showing the first file
   useEffect(() => {
      setActiveFileIndex(0);
   }, [files.length]);

   // Create object URLs for image files - moved before conditional return
   const fileURLs = files.map((fileObj) => {
      if (fileObj?.file?.type?.includes("image")) {
         return URL.createObjectURL(fileObj.file);
      }
      return null;
   });

   // Cleanup object URLs when component unmounts - moved before conditional return
   useEffect(() => {
      return () => {
         fileURLs.forEach((url) => {
            if (url && url.startsWith("blob:")) {
               URL.revokeObjectURL(url);
            }
         });
      };
   }, [fileURLs]);

   // If no files, show default placeholder
   if (files.length === 0) {
      return (
         <div className="hidden md:flex flex-col items-center justify-center relative h-full min-h-[300px] bg-gray-50">
            <div className="text-center p-8">
               <div className="text-6xl mb-4">📄</div>
               <p className="text-gray-500 font-medium">
                  Your prescription will appear here
               </p>
               <p className="text-sm text-gray-400 mt-2">
                  Upload files to see previews
               </p>
            </div>
         </div>
      );
   }

   // Handle navigation between multiple files
   const nextFile = () => {
      setActiveFileIndex((prev) => (prev + 1) % files.length);
   };

   const prevFile = () => {
      setActiveFileIndex((prev) => (prev - 1 + files.length) % files.length);
   };

   const activeFile = files[activeFileIndex];
   const fileURL = fileURLs[activeFileIndex];
   const isImage = activeFile?.file?.type?.includes("image");
   const isPDF = activeFile?.type?.includes("pdf");

   return (
      <div className="hidden md:block relative h-full min-h-[300px] bg-gray-50">
         {/* File Preview */}
         <div className="absolute inset-0 flex items-center justify-center">
            {isImage ? (
               <img
                  src={fileURL}
                  alt={`Preview of ${activeFile.name}`}
                  className="max-w-full max-h-full object-contain p-4"
               />
            ) : (
               <div className="flex flex-col items-center justify-center p-8 text-center">
                  <div className="text-6xl mb-4">{isPDF ? "📑" : "📄"}</div>
                  <p className="text-gray-700 font-medium truncate max-w-full">
                     {activeFile.name}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">{activeFile.size} MB</p>
                  <p className="mt-6 text-xs px-6 py-2 bg-blue-100 text-blue-700 rounded-full">
                     {isPDF ? "PDF Document" : "Document File"}
                  </p>
               </div>
            )}
         </div>

         {/* Navigation arrows if multiple files */}
         {files.length > 1 && (
            <>
               <button
                  onClick={prevFile}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md"
                  aria-label="Previous file"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                  >
                     <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                     />
                  </svg>
               </button>
               <button
                  onClick={nextFile}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md"
                  aria-label="Next file"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                  >
                     <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                     />
                  </svg>
               </button>
            </>
         )}

         {/* File info overlay */}
         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800/70 to-transparent p-4 text-white">
            <p className="font-medium truncate">{activeFile.name}</p>
            <div className="flex justify-between items-center mt-1">
               <p className="text-sm text-gray-200">{activeFile.size} MB</p>
               {files.length > 1 && (
                  <p className="text-sm">
                     {activeFileIndex + 1} of {files.length}
                  </p>
               )}
            </div>
         </div>

         {/* File count indicator */}
         <div className="absolute top-4 right-4 bg-green-600 text-white text-xs rounded-full px-2 py-1">
            {files.length} {files.length === 1 ? "file" : "files"}
         </div>
      </div>
   );
};

export default FilePreviewArea;
