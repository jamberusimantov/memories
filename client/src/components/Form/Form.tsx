import React from "react";
import { useDispatch } from "react-redux";
import { postPost } from '../../store/actions/posts'
import useStyle from './style'
import { Typography, TextField, Button, Paper, IconButton } from '@material-ui/core'
import { useState } from "react";
import PhotoCamera from '@material-ui/icons/PhotoCamera';


const Form = () => {
    interface IPost {
        creator: string,
        title: string,
        tags: string[],
        message: string,
        file: {
            name: string,
            size: string,
            type: string,
            base64: string | ArrayBuffer | null
        }
    }
    const mockPost = {
        creator: '',
        title: '',
        tags: [''],
        message: '',
        file: {
            base64: new ArrayBuffer(0),
            name: '',
            size: '',
            type: ''
        }
    }
    const dispatch = useDispatch();
    const classes = useStyle();
    const [postData, setPostData] = useState<IPost>(mockPost)
    const [isAddFile, setIsAddFile] = useState(false)
    const submitHandler = (e: any) => { e.preventDefault(); dispatch(postPost(postData)) }
    const resetHandler = () => { setIsAddFile(false); setPostData(mockPost); }
    const fileChangeHandler = (e: any) => {
        const files = e.target.files;
        const file = files[0];
        const { name, type } = file;
        const size = `${Math.round(file.size / 1000)} kB`;
        const reader = new FileReader();
        reader.onload = () => {
            const base64 = reader.result;
            setPostData({ ...postData, file: { name, type, size, base64 } })
        }
        reader.readAsDataURL(file);
    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.form} ${classes.root}`} onSubmit={submitHandler}>
                <Typography variant='h6'>Create a Post</Typography>
                {/* title */}
                <TextField
                    name='title'
                    variant='outlined'
                    label='Title'
                    fullWidth
                    value={postData.title}
                    onChange={(e: any) => setPostData({ ...postData, title: e.target.value })}>
                </TextField>
                {/* creator */}
                <TextField
                    name='creator'
                    variant='outlined'
                    label='Creator'
                    fullWidth
                    value={postData.creator}
                    onChange={(e: any) => setPostData({ ...postData, creator: e.target.value })}>
                </TextField>
                {/* messages */}
                <TextField
                    name='message'
                    variant='outlined'
                    label='Message'
                    fullWidth
                    value={postData.message}
                    onChange={(e: any) => setPostData({ ...postData, message: e.target.value })}>
                </TextField>
                {/* tags */}
                <TextField
                    name='tags'
                    variant='outlined'
                    label='Tags'
                    fullWidth
                    value={postData.tags}
                    onChange={(e: any) => {
                        let tags = e.target.value.replace(',', ' ').split(' ');

                        setPostData({ ...postData, tags })
                    }}>
                </TextField>
                {/* file */}
                <TextField
                    name='file'
                    variant='outlined'
                    label='File'
                    type='file'
                    fullWidth
                    id='file'
                    className={classes.input}
                    onChange={fileChangeHandler}>
                </TextField>
                <label htmlFor="file">
                    <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                        onClick={() => setIsAddFile(true)
                        }>
                        <PhotoCamera />
                    </IconButton>
                </label>
                {isAddFile &&
                    <div className={classes.imgPreviewContainer} >
                        {postData.file.name ?
                            <img
                                src={`${postData.file.base64}`}
                                alt={postData.file.name}
                                className={classes.imgPreview} />
                            : <span>Image Preview...</span>}
                    </div>}
                {/* submit */}
                <Button
                    type='submit'
                    className={classes.buttonSubmit}
                    fullWidth
                    size='large'
                    color='primary'
                    variant='contained'>
                    Send
                </Button>
                {/* reset */}
                <Button
                    type='reset'
                    className={classes.buttonReset}
                    fullWidth
                    size='small'
                    color='secondary'
                    variant='contained'
                    onClick={resetHandler}>
                    Reset
                </Button>
            </form>
        </Paper>
    )
}
export default Form;