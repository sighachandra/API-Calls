import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
   
    backgroundColor: theme.palette.background.paper,
  },
}));



// export default function SimpleList() {
//   const classes = useStyles();
//   const [items, setItems] = useState([]);
//   React.useEffect(() => {
//     fetch('https://randomuser.me/api/')
//       .then(results => results.json())
//       .then(json => {const {ele} = json.results[0];
//       setItems((json))
//   },[])
//   return (
//     <div className={classes.root}>
    
//       <Divider />
//       <List component="nav" aria-label="secondary mailbox folders">
//         <ListItem button>
//         <ListItemIcon>
//           <StarIcon />
//         </ListItemIcon>
//           <ListItemText primary="And terrifying at some points." />
//         </ListItem>
//         <ListItem>
//         <ListItemIcon>
//           <StarIcon />
//         </ListItemIcon>
//           <ListItemText primary="I got quite nervous at some points" />
//         </ListItem>
//         <ListItem>
//         <ListItemIcon>
//           <StarIcon />
//         </ListItemIcon>
//           <ListItemText primary="At some points everybody needs to be pushed" />
//         </ListItem>
//         <ListItem>
//         <ListItemIcon>
//           <StarIcon />
//         </ListItemIcon>
//           <ListItemText primary="I was a little overwhelmed at some points" />
//         </ListItem>
//         <ListItem>
//         <ListItemIcon>
//           <StarIcon />
//         </ListItemIcon>
//           <ListItemText primary="I was tearing up at some point" />
//         </ListItem>
//       </List>
//      {items.map(item => {
//        return(
//           <div>{(items)}</div>
//        );
//      })};
//     </div>
//   );
// }
export default function useTest() {
  const [firstName, setFirstName] = React.useState(null);
  
  
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(results => results.json())
      .then(data =>{
        setFirstName(data);
     
      });
  }, []);

  return (
    <div>
     <h4>{JSON.stringify(firstName)}</h4>
     <p></p>
    </div>
  );
}
