export const useUploader = () => {
  const onDocLoaded: Ref<null | Function> = ref(null);
  const doc: Ref<any> = ref(null);

  const onDragDrop = async (event) => {
    return setFiles(event.dataTransfer.files as FileList);
  };
  const getDoc = () => doc.value;

  const clearDoc = () => (doc.value = null);

  const setFiles = async (fileList: FileList) => {
    return new Promise((resolve, reject) => {
      if (!fileList || fileList.length === 0) {
        reject("No file provided");
        return;
      }

        const file = fileList[0];
    //   const file = fileList;

      let error = [];
      let image = new Image();
      let reader = new FileReader();

      reader.onloadend = () => {
        image.src = reader.result as string;
      };

      image.onload = () => {
        if (onDocLoaded.value !== null) {
          onDocLoaded.value(file, image, error);
        }

        if (error.length === 0) {
          doc.value = file;
          //   if (onUploadSuccess.value) onUploadSuccess.value();
          resolve("success");
        } else {
          //   if (onUploadFail.value) onUploadFail.value(error);
          reject("failed");
        }
      };

      image.onerror = () => {
        reject("Failed to load image.");
      };

      reader.onerror = () => {
        reject("Failed to read file.");
      };

        reader.readAsDataURL(file);
    });
  };

  return {
    onDragDrop,
    getDoc,
    clearDoc,
    setFiles,
  };
};
