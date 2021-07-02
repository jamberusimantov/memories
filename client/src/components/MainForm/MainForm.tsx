import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { Typography, TextField, Button, Paper, IconButton } from '@material-ui/core'
import { Search, Publish, PhotoCamera, Update } from '@material-ui/icons';
import useStyle from './style.mainForm'
import { mockPost } from '../Post/utils'
import { postPost, updatePost, getPosts } from '../../store/actions/posts.actions'
import { setMainFormData, setMainFormMethod } from '../../store/actions/form.actions'




const Form = (props: any) => {
    const { responseHandler: { formResponse, messageHandler, isLogin } } = props;
    const user = useSelector((state: any) => state.user);
    const form = useSelector((state: any) => state.form);
    const { formData, method } = form;
    const dispatch = useDispatch();
    const classes = useStyle();
    const [isAddFile, setIsAddFile] = useState(false)
    const history = useHistory();

    const submitHandler = (e: any) => {
        e.preventDefault();
        if (method === 0) {
            messageHandler('searching...')
            dispatch(getPosts(formData, messageHandler));
            history.push('/posts');
        }
        else if (method === 1) {
            messageHandler('posting...')
            formData.creatorId = isLogin ? user._id :  formData.creatorId;
            dispatch(postPost(formData, messageHandler))
            history.push('/');
        }
        else if (method === 2) {
            messageHandler('editing...')
            dispatch(updatePost(formData, messageHandler));
            history.push('/');
        }
        resetHandler();
    }
    const resetHandler = () => {
        setIsAddFile(false);
        dispatch(setMainFormData(mockPost));
        dispatch(setMainFormMethod(0));
    }
    const fileChangeHandler = (e: any) => {
        const files = e.target.files;
        const file = files[0];
        const { name, type } = file;
        const size = `${Math.round(file.size / 1000)} kB`;
        const reader = new FileReader();
        reader.onload = () => {
            const base64 = reader.result;
            dispatch(setMainFormData({ ...formData, file: { name, type, size, base64 } }))
        }
        reader.readAsDataURL(file);
    }

    const icons = [<Search />, <Publish />, <Update />];
    const titles = ['Search', 'Create', 'Edit'];
    const isCreator = (isLogin && method !== 1) || (!isLogin);
    const isRequired = method !== 0; 
    return (
        <Paper className={classes.paper}>
            <form
                autoComplete='off'
                onSubmit={submitHandler}
                className={`${classes.form} ${classes.root}`}>

                {/* form Head */}
                <div className={classes.formHead}>
                    {/* form toggle */}
                    <IconButton
                        className={classes.formHead_button}
                        aria-label="create a post / search a post  toggle"
                        component="span"
                        onClick={() => dispatch(setMainFormMethod(method === 0 ? 1 : 0))}>
                        {icons[method === 0 ? 1 : 0]}
                    </IconButton>

                    {/*form title */}
                    <Typography
                        variant='h6'
                        className={classes.formHead_title}
                    >{`${titles[method]} a Post`}</Typography>
                </div>

                {/* title */}
                <TextField
                    name='title'
                    variant='outlined'
                    label='Title'
                    fullWidth
                    required={isRequired}
                    value={formData.title}
                    onChange={(e: any) => dispatch(setMainFormData({ ...formData, title: e.target.value }))}>
                </TextField>

                {/* message */}
                <TextField
                    name='message'
                    variant='outlined'
                    label='Message'
                    fullWidth
                    required={isRequired}
                    value={formData.message}
                    onChange={(e: any) => dispatch(setMainFormData({ ...formData, message: e.target.value }))}>
                </TextField>

                {/* creator */}
                {isCreator && <TextField
                    name='creator'
                    variant='outlined'
                    label='Creator'
                    fullWidth
                    required={isRequired}
                    value={formData.creator}
                    onChange={(e: any) => dispatch(setMainFormData({ ...formData, creator: e.target.value }))}>
                </TextField>}

                {/* tags */}
                <TextField
                    name='tags'
                    variant='outlined'
                    label='Tags'
                    fullWidth
                    required={isRequired}
                    value={formData.tags}
                    onChange={(e: any) => dispatch(setMainFormData({ ...formData, tags: e.target.value }))}>
                </TextField>

                {method !== 0 &&
                    <>
                        {/* file */}
                        <TextField
                            name='file'
                            variant='outlined'
                            label='File'
                            type='file'
                            fullWidth
                            id='file'
                            style={{ display: 'none' }}
                            onChange={fileChangeHandler}>
                        </TextField>

                        {/* label to undisplayed input */}
                        <label htmlFor="file">
                            <IconButton
                                className={classes.uploadImg}
                                aria-label="upload picture"
                                component="span"
                                onClick={() => setIsAddFile(true)}>
                                <PhotoCamera />
                            </IconButton>
                        </label>

                        {/* img preview */}
                        {isAddFile &&
                            <div className={classes.imgPreviewContainer} >
                                {formData.file?.name ?
                                    <img
                                        src={`${formData.file.base64}`}
                                        alt={formData.file.name}
                                        className={classes.imgPreview} />
                                    : <span>Image Preview...</span>}
                            </div>}
                    </>}


                {/* submit */}
                <Button
                    fullWidth
                    className={classes.btn}
                    size='large'
                    type='submit'
                    // onClick={submitHandler}
                    variant='contained'>
                    Send
                </Button>

                {/* reset */}
                <Button
                    fullWidth
                    className={classes.btn}
                    size='small'
                    variant='contained'
                    type='reset'
                    onClick={resetHandler}
                >
                    Reset
                </Button>

                {/* form response */}
                <Typography variant='h6'>{`${formResponse}`}</Typography>

            </form>
        </Paper>
    )
}
export default Form;