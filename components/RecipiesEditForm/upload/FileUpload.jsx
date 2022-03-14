import React, {useCallback,useEffect, useState} from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'
import styles from './FileUpload.module.scss'
import classnames from 'classnames/bind';
import {SingleFileUpload} from './SingleFileUpload'	
import { Box, Grid } from '@material-ui/core';
import {useField} from 'formik'
import UploadError from './UploadError'

let currentId = 0;

function getNewId() {
  // we could use a fancier solution instead of a sequential ID :)
  return ++currentId;
}

const DefaultDropZone = styled.div`
	border-radius: 4px;
	width: 100%;
	min-height: 100px;
	box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08);
	padding: 20px;
`
const isDroppingActive = styled.div`
	width: 100%;
	background: #6E41E2;	
	min-height: 100px;
	box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08);
	border-radius: 4px;
`

const MainParagraph = styled.p`
	font-size: 16px;
`

const SecondParagraph = styled.p`
	padding-top: 8px;
	font-size: 13px;
`

const FileUpload = ({name}) => {
	const [_,__, helpers] = useField(name)
	const [files, setFiles] = useState([])

	 const onDrop = useCallback((accFiles, rejFiles) => {
		const mappedAcc = accFiles.map((file) => ({ file, errors: [], id: getNewId() }));
		const mappedRej = rejFiles.map((r) => ({ ...r, id: getNewId() }));
		setFiles((curr) => [...curr, ...mappedAcc, ...mappedRej]);
	 }, []);

	 useEffect(() => {
		helpers.setValue(files)
		//helpers.setTouched(true)
	}, [files])


	const onDelete = (file) => {
		setFiles(curr => curr.filter(fw => fw.file !== file))
	}

	const onUpload = (file, url) => {
		setFiles((curr) => curr.map(fw => {
			if (fw.file === file) {
				return {...fw, url} 
			}
			return fw
		}))
	}				

	const {getRootProps, getInputProps, isDragActive} = useDropzone({
		onDrop,
		accept: ['image/*'],
		maxSize: 10000 * 1024, // 300KB
	 });

	return (
		<>
			<Grid item>
				<DefaultDropZone {...getRootProps()}>
					<input {...getInputProps()} />

					<p>Drag 'n' drop some files here, or click to select files</p>
					{files.map((fileWrapper, index) => (
						<Grid item key={index}>
							{fileWrapper.errors.length ? (
								<UploadError
									file={fileWrapper.file}
									errors={fileWrapper.errors}
									onDelete={onDelete}
								/>
							) : (
								<SingleFileUpload
									onDelete={onDelete}
									onUpload={onUpload}
									file={fileWrapper.file}
								/>
							)}
						</Grid>
					))}
				</DefaultDropZone>
				{/* <Box {...getRootProps()}>
					<input {...getInputProps()} />
						{!isDragActive && 
							<>
								<MainParagraph>
									Select a file or drag in form
								</MainParagraph>
								<SecondParagraph>
									PNG, jpg, gif files up to 10MB in size are available for download
								</SecondParagraph>
							</>
						}
						{isDragActive && 
							<>
								<MainParagraph>
									go go go
								</MainParagraph>
							</>
						}
				</Box> */}
			</Grid>
				
		</>
	)
}

export default FileUpload