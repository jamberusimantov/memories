import React, { useState } from "react";
import { Link } from 'react-router-dom';
import useStyles from './style.post'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import { ThumbUpOutlined, ThumbUp, DeleteOutline, MoreHoriz } from '@material-ui/icons'
import { useSelector, useDispatch } from 'react-redux';
import { IPost } from './utils'
import { setMainFormData, setMainFormMethod } from '../../store/actions/form.actions'
import * as api from '../../api'
import * as postActions from '../../store/actions'

const Post = (props: { post: IPost, isUserPage?: boolean }) => {
    const { post, isUserPage } = props;

    const { posts: { likePost } } = postActions.default;
    const { creator, creatorId, title, message, file, tags, _id, createdAt, likes } = post;
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user);
    const [likeResponse, setLikeResponse] = useState('');
    const [isLike, setIsLike] = useState(likes?.some((like) => ({ _id: user._id, name: user.name })));
    const classes = useStyles();
    const tagsArray = tags?.split(' ') || [];
    const currentCreator = creatorId === user._id;


    // like response msg handler
    const messageHandler = (data: string) => {
        setLikeResponse(data);
        setTimeout(() => { setLikeResponse(''); }, 3000)
    }

    // download file handler
    const fetchFile = async (e: any) => {
        e.preventDefault();
        const res = await api.download.fetchFile(`${_id}`);
        if (!res.success) return console.warn(res);
        const link = document.createElement('a');
        link.href = res.data.base64;
        link.download = `${res.data.name}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    // learn more handler
    const explorePost = () => {


    }
    // delete handler
    const remove = () => {
        console.log('remove');
    }

    // like handler
    const likeHandler = () => {
        const likeMsg = {
            post: post._id,
            user: {
                _id: user._id,
                name: user.name
            }
        }
        if (!isLike) {
            dispatch(likePost(likeMsg, messageHandler))
            setIsLike(true);
        }
        else {
            (function () { alert('unsupported action ;)') }());
        }

    }


    return (
        <Card className={`${classes.card} ${classes.border}`}>
            <CardActionArea>

                {/* img */}
                <CardMedia
                    component="img"
                    alt={file?.name}
                    width="100%"
                    height='300'
                    // className={classes.fullHeightCard}
                    image={file?.base64 ? `${file.base64}` : undefined}
                    // className={`${classes.media} ${classes.fullHeightCard}`}
                    title={file?.name} />

                {/* content */}
                <CardContent >

                    {/* top-card overlays */}
                    <div>

                        {/* creator */}
                        <Typography
                            variant='inherit'
                            component="p"
                            className={classes.overlay0}>
                            {currentCreator ? user.name : creator}
                        </Typography>

                        {/* date */}
                        <Typography
                            variant='inherit'
                            component="p"
                            className={classes.overlay1}>
                            {createdAt?.substr(0, createdAt.indexOf('T'))}
                        </Typography>
                    </div>

                    {/* edit post btn */}
                    {currentCreator && <Typography
                        variant="inherit"
                        color='primary'
                        component="span"
                        className={classes.overlay2}
                        onClick={() => {
                            dispatch(setMainFormData({ creator, title, message, tags, _id }));
                            dispatch(setMainFormMethod(2));
                        }} >
                        <MoreHoriz />
                    </Typography>}

                    {/* download img */}
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        className={classes.left} >
                        <a href='/' onClick={fetchFile}>Click to download Image</a>
                    </Typography>

                    {/* tags */}
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        className={classes.left}
                        component="p">
                        {React.Children.toArray(tagsArray.map((tag: string) => `  #${tag}  `))}
                    </Typography>

                    {/* title */}
                    <Typography gutterBottom variant="h2" component="h2" className={`${classes.title} ${classes.details}`} >
                        {title}
                    </Typography>

                    {/* main text */}
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        className={classes.message}
                        component="p">
                        {message}
                    </Typography>
                </CardContent>
            </CardActionArea >

            {/* bottum btns */}
            <CardActions className={classes.cardActions}>

                {/* like btn  */}
                <Button
                    size="small"
                    color="primary"
                    onClick={likeHandler}
                    className={classes.cardActionsBtn}>
                    <Typography variant="inherit" component="span" >
                        {likes?.length}
                    </Typography>
                    {isLike ? <ThumbUp /> : <ThumbUpOutlined />}
                </Button>

                {/* delete / more info btn */}
                <Button
                    size="small"
                    color="primary"
                    onClick={creator === user.name ? remove : explorePost}
                    className={classes.cardActionsBtn}>
                    <DeleteOutline />
                    {creator === user.name ?
                        <Typography variant="inherit" component="span" >DELETE</Typography>
                        :
                        <Link to={isUserPage ? `/` : `/post/${_id}`}
                            onClick={() => {
                                dispatch(setMainFormData({ creator, title, message, tags, _id: '' }));
                                dispatch(setMainFormMethod(0));
                            }}>
                            <Typography variant="inherit" component="span" >{isUserPage? 'GO BACK': 'LEARN MORE'}</Typography>
                        </Link>
                    }
                </Button>
            </CardActions>

            {/* like response */}
            <Typography variant='h6'>{`${likeResponse}`}</Typography>
        </Card>
    );
}
export default Post;