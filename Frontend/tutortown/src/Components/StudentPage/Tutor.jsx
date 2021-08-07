import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTutorData } from '../../Redux/Student/action';
import styles from "./Tutor.module.css"
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(5),
    minWidth: 180,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));

// let mathematics=1
// let science=2
// let english=3
// let computer=4
// let arts=5

// let delhi_east=10
// let delhi_west=20
// let delhi_south=30
// let noida=40

const Tutor = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const [state2, setState2] = React.useState({
        location: '',
        name: 'hai',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
        ...state,
        [name]: event.target.value,
        });
    };
    console.log(state.age, state.name);

    const handleChange2 = (event) => {
        const name = event.target.name;
        setState2({
        ...state2,
        [name]: event.target.value,
        });
    };
    console.log(state2.location, state2.name);

    const tutorData = useSelector(state=>state.tutor.tutorData)
    const dispatch = useDispatch()

    const handleSearch = (subj, loc) => {
        dispatch( getTutorData(state.age, state2.location) )
    }

    // useEffect(()=> {
    //     dispatch( getTutorData() )
    // }, [dispatch])
    
    // console.log();

    // if (tutorData.length>0) {

        // let tutorDetails = tutorData.data.tutors
        // console.log(tutorDetails);

    // }

    return (
        <div>
            <br/>

            <form className={classes.root} noValidate autoComplete="off">
                {/* <TextField id="outlined-basic" label="Subject" color="secondary" variant="outlined" />
                <TextField id="outlined-basic" label="Outlined" color="secondary" variant="outlined" /> */}

                <FormControl color="secondary" required className={classes.formControl}>
                    <InputLabel htmlFor="age-native-required">Subject</InputLabel>
                    <Select
                    native
                    value={state.age}
                    onChange={handleChange}
                    name="age"
                    inputProps={{
                        id: 'age-native-required',
                    }}
                    >
                    <option aria-label="None" value="" />
                    <option value="mathematics">Mathematics</option>
                    <option value="science">Science</option>
                    <option value="english">English</option>
                    <option value="computer">Computer</option>
                    <option value="arts">Arts</option>
                    </Select>
                    <FormHelperText>Required</FormHelperText>

                    
                </FormControl>

                <FormControl  color="secondary" required className={classes.formControl}>
                    

                    <InputLabel htmlFor="location-native-required">Location</InputLabel>
                    <Select
                        native
                        value={state2.location}
                        onChange={handleChange2}
                        name="location"
                        inputProps={{
                            id: 'location-native-required',
                        }}
                        >
                        <option aria-label="None" value="" />
                        <option value="Delhi-East">Delhi-East</option>
                        <option value="Delhi-West">Delhi-West</option>
                        <option value="Delhi-South">Delhi-South</option>
                        <option value="Noida">Noida</option>
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                </FormControl>

                <Button onClick={handleSearch} variant="contained" color="secondary" size="large" style={{marginTop:"44px", marginLeft:"40px"}} disableElevation>
                    Search
                </Button>


            </form>

            <div className={styles.display}>
                {   
                    tutorData[2]?.map((item,i) => (
                        <div key={i} className={styles.tutorCard} >
                            <div >
                                <img className={styles.roundImg} width="100%" src={item.profile_photo}  alt="" />
                            </div>
                            <div className={styles.bigFont}>I'm <span className={styles.colorText} >{item.name}</span></div>
                            <div>{item.experience} Years of Teaching Experience</div>
                            <br />
                            <Button variant="contained" color="secondary" size="large" disableElevation>
                                LEARN WITH ME
                            </Button>
                        </div>
                    ))
                    
                }
            </div>
        </div>
    );
};

export default Tutor;