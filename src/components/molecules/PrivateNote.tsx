import { ChangeEvent, FormEvent, useState } from "react";

const PrivateNote = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedFile) {
      alert("Please select a file first");
      return;
    }

    // Handle the file upload here
    console.log("File selected:", selectedFile.name);
    // Implement your upload logic here
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit} className="">
        <div>
          <label htmlFor="myfile" className="">
            Select a file:
          </label>
          <input
            type="file"
            id="myfile"
            name="myfile"
            onChange={handleFileChange}
            className=""
          />
        </div>

        <div className="">
          <button type="submit" className="">
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default PrivateNote;
