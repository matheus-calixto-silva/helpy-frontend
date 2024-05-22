import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import styles from './Dropzone.module.css';

interface IProps {
  onFileUploaded: (file: File) => void;
}

const Dropzone = ({ onFileUploaded }: IProps) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      const fileurl = URL.createObjectURL(file);

      setSelectedFileUrl(fileurl);
      onFileUploaded(file);
    },
    [onFileUploaded],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/png': ['.png'],
      'image/jpg': ['.jpg'],
      'image/jpeg': ['.jpeg'],
    },
  });

  return (
    <div className={styles.dropzone} {...getRootProps()}>
      <input {...getInputProps()} name="photo" accept="image/*" />

      {selectedFileUrl ? (
        <img src={selectedFileUrl} alt="Event thumbnail" />
      ) : (
        <p className="b3">Adicione uma imagem do evento</p>
      )}
    </div>
  );
};

export default Dropzone;
