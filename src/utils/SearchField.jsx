// import React from 'react';
// import TextField from '@material-ui/core/TextField';
// import { createStyles, makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) =>
//   createStyles({
//     root: {
//       '& .MuiTextField-root': {
//         margin: theme.spacing(1),
//         width: '25ch',
//       },
//     },
//     search: {
//         minWidth: '400px'
//     }
//   })
// );

// export const SearchField = () => {
//   const classes = useStyles();
//   return (
//     <form className={classes.root} noValidate autoComplete="off">
//       <TextField
//         id="outlined-search"
//         label="Пошук товарів"
//         type="search"
//         variant="outlined"
//         className={classes.search}
//       />
//     </form>
//   );
// };


import React, { useState } from 'react';
import styles from '../styles/SearchField.module.scss';


export const SearchField = () => {
  const [value, setValue] = useState('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // search will come here
        setValue('');
      }}
      className={styles.topbar__form}
    >
      <input
        type="text"
        name="search"
        placeholder="Пошук товарів"
        className={styles.topbar__input}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <input
        type="submit"
        name="submit-input"
        className={styles.topbar__submit}
        value=""
      />
    </form>
  );
};
