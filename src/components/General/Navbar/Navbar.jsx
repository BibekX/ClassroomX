// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import CloseIcon from "@material-ui/icons/Close";
// import MenuIcon from "@material-ui/icons/Menu";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// export default function Navbar() {
//   const [click, setClick] = useState(false);
//   const handleClick = () => setClick(!click);
//   const closeMenu = () => setClick(false);

//   const classes = useStyles();
//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <Router>
//             {/* <Link to="/" className="navbar-brand">
//               ClassroomX
//             </Link> */}
//             <IconButton
//               edge="start"
//               className={classes.menuButton}
//               onClick={handleClick}
//               color="inherit"
//               aria-label="menu"
//             >
//               {click ? <CloseIcon /> : <MenuIcon />}
//             </IconButton>
//             <Typography variant="h6" className={classes.title}>
//               ClassroomX
//             </Typography>
//             {/* <ul className={click ? "nav-menu active" : "nav-menu"}>
//               <li className="nav-item">
//                 <Link to="/" className="nav-links" onClick={closeMenu}>
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/question" className="nav-links" onClick={closeMenu}>
//                   Question
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/my-class" className="nav-links" onClick={closeMenu}>
//                   My Class
//                 </Link>
//               </li>
//             </ul> */}
//             <Menu></Menu>

//             <Button
//               variant="outlined"
//               color="inherit"
//               className={classes.menuButton}
//             >
//               Login
//             </Button>
//             <Button
//               variant="contained"
//               style={{ backgroundColor: "purple", color: "white" }}
//               className={classes.menuButton}
//             >
//               Sign up
//             </Button>
//           </Router>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }

// // export default function ButtonAppBar() {
// //   const classes = useStyles();

// //   return (
// //     <div className={classes.root}>
// //       <AppBar position="static">
// //         <Toolbar>
// //           {/* <IconButton
// //             edge="start"
// //             className={classes.menuButton}
// //             color="inherit"
// //             aria-label="menu"
// //           >
// //             <MenuIcon />
// //           </IconButton> */}
// //           <Typography variant="h6" className={classes.title}>
// //             ClassroomX
// //           </Typography>
// //           <Button
// //             variant="outlined"
// //             color="inherit"
// //             className={classes.menuButton}
// //           >
// //             Login
// //           </Button>
// //           <Button
// //             variant="contained"
// //             style={{ backgroundColor: "white", color: "black" }}
// //             className={classes.menuButton}
// //           >
// //             Sign up
// //           </Button>
// //         </Toolbar>
// //       </AppBar>
// //     </div>
// //   );
// // }
