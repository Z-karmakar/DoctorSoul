"use client"

import { useState, useRef } from "react"

const FileUpload = ({ name, label, onChange, error }) => {
  const [fileName, setFileName] = useState("")
  const fileInputRef = useRef(null)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFileName(file.name)
      onChange(file)
    }
  }

  const handleClick = () => {
    fileInputRef.current.click()
  }

  return (
    <div className="w-full">
      <div
        onClick={handleClick}
        className={`w-full px-4 py-3 rounded-md bg-gray-200 text-center cursor-pointer hover:bg-gray-300 transition-colors ${
          error ? "border border-red-500" : ""
        }`}
      >
        {fileName ? fileName : label}
      </div>
      <input type="file" name={name} id={name} ref={fileInputRef} onChange={handleFileChange} className="hidden" />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}

export default FileUpload

