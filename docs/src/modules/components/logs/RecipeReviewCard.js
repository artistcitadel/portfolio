import * as React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
// import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import compose from 'docs/src/modules/utils/compose';

// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';

// const styles = theme => ({
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 800,
  },
  media: {
    height: 400,
    width: 700,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

//class RecipeReviewCard extends React.Component {
export default function RecipeReviewCard(props) {
  const {data} = props;
  const classes = useStyles();
  const [expanded,setExpanded] = React.useState(false);
  // state = { expanded: false };

  //handleExpandClick = () => {
    // this.setState(state => ({ expanded: !state.expanded }));
  function handleExpandClick(){
    setExpanded(!expanded);
  };

  //render() {
    //const { classes, data } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              R
            </Avatar>
          }
        /*  action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }*/
          title={data.subname}
          subheader={data.period}
        />
        {/* {data.github==='abio.png' &&
        <ImageGridList />
        }
        {data.github !== 'abio.png' && */}
         <CardMedia
          className={classes.media}
          image={`/static/media/images/logos/${data.github}`}
          title="Oh's Work"
        />
        {/* } */}
        <CardContent>
          <Typography component="p">
            {data.flag}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          {/*<IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>*/}
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Used technologies</Typography>
            <Typography paragraph>
              {data.city}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  //}
}

RecipeReviewCard.propTypes = {
  // classes: PropTypes.object.isRequired,
  data : PropTypes.object.isRequired
};
RecipeReviewCard.getInitialProps = async () => {
  return {
    data: await data,
  };
};
// export default withStyles(styles)(RecipeReviewCard)
/*export default compose(
  connect(state => ({
    data: state.options.data,
  })),
  withStyles(styles),
)(RecipeReviewCard);*/


// const useStyles1 = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper,
//   },
//   gridList: {
//     width: 500,
//     height: 450,
//   },
// }));
// export function ImageGridList() {
//   const classes = useStyles1();

//   return (
//     <div className={classes.root}>
//       <GridList cellHeight={160} className={classes.gridList} cols={3}>
//         {tileData.map((tile) => (
//           <GridListTile key={tile.img} cols={tile.cols || 1}>
//             <img src={tile.img} alt={tile.title} />
//           </GridListTile>
//         ))}
//       </GridList>
//     </div>
//   );
// }

// const tileData = [
//   {
//     img: '/static/media/images/logos/abio.png',
//     title: 'bio',
//     author: 'seyoung',
//     cols: 2,
//     featured: true,
//   },
//   {
//     img: '/static/media/images/logos/bio1.png',
//     title: 'bio',
//     author: 'seyoung',
//   },
//   {
//     img: '/static/media/images/logos/bio2.png',
//     title: 'bio',
//     author: 'seyoung',
//   }
// ];
