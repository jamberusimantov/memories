import React from "react";
import useStyles from './style'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import { ThumbUpOutlined, DeleteOutline, MoreHoriz } from '@material-ui/icons'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Post = (props: any) => {
    const { post } = props;
    const { creator, title, message, file, likeCount, tags, _id, createdAt } = post;
    const userData = useSelector((state: any) => state.userData);

    const classes = useStyles();

    return (
        <Card className={`${classes.card} ${classes.border}`}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={file?.name}
                    height="140"
                    image={file?.base64}
                    // className={`${classes.media} ${classes.fullHeightCard}`}
                    title={file?.name} />
                <CardContent >
                    <div>
                        <Typography variant='inherit' component="p" className={classes.overlay0}>
                            {creator}
                        </Typography>
                        <Typography variant='inherit' component="p" className={classes.overlay1}>
                            {createdAt}
                        </Typography>
                    </div>
                    <Typography variant="inherit" component="span" className={classes.overlay2} >
                        <Link to={`./post/${_id}`} >
                            <MoreHoriz />
                        </Link>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {React.Children.toArray(tags.map((tag: string) => ` #${tag} `))}
                    </Typography>
                    <Typography gutterBottom variant="h2" component="h2" className={`${classes.title} ${classes.details}`} >
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {message}
                    </Typography>
                </CardContent>
            </CardActionArea >
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">
                    <ThumbUpOutlined />
                    <Typography variant="inherit" component="span" >
                        likes: {likeCount}
                    </Typography>
                </Button>
                <Button size="small" color="primary">
                    <DeleteOutline />
                    <Typography variant="inherit" component="span" >
                        {creator === userData.name ? 'DELETE' : 'LEARN MORE'}
                    </Typography>
                </Button>
            </CardActions>
        </Card>
    );
}
export default Post;