import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTutorData, postTutorData } from '../../Redux/Student/action';
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

    const [demoCount, setDemoCount] = useState(0)
    const [rowCount, setRowCount] = useState(0)

    const [canBook, setCanBook] = useState(false)

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
    // console.log(state.age, state.name);

    const handleChange2 = (event) => {
        const name = event.target.name;
        setState2({
        ...state2,
        [name]: event.target.value,
        });
    };
    // console.log(state2.location, state2.name);

    const tutorData = useSelector(state=>state.tutor.tutorData)
    const place = useSelector(state=>state.tutor.place)
    const student = useSelector(state=>state.tutor.student)
    const subject = useSelector(state=>state.tutor.subject)

    const dispatch = useDispatch()

    // let demoCount=0

    const handleSearch = (subj, loc) => {
        dispatch( getTutorData(state.age, state2.location) )
    }

    const handlePayNow = () => {

    }

    const handleBookDemo = (tutor) => {
        // setDemoCount(demoCount+1)
        setCanBook(true)
        setRowCount(rowCount+1)

        const payload = {
            tutor,
            subject,
            student,
            place
        }

        dispatch( postTutorData(payload) )
    }
    
    // console.log(demoCount);
    // console.log(rowCount);

    

    useEffect(() => {

        // dispatch( handleBookDemo() )

        // if (canBook) {
        //     setTimeout(() => {
        //         setCanBook(false)
        //     }, 2500);
        // }
    }, [dispatch, canBook])
    
    // console.log();

    // if (tutorData.length>0) {

        // let tutorDetails = tutorData.data.tutors
        // console.log(tutorDetails);

    // }

    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <div>
                <div className={styles.dashMainCont} >

                    <div className={styles.dashHeading}>
                        <div>ID</div>
                        <div>SUBJECT NAME</div>
                        <div>TUTOR</div>
                        <div>PLACE</div>
                        <div>TYPE</div>
                    </div>

                    {
                        (rowCount>=1) &&
                        <div className={styles.dashRows}>
                            <div>1</div>
                            <div>Mathematics</div>
                            <div>Nrupul Dev</div>
                            <div>Delhi-East</div>
                            <div>Free</div>
                        </div>
                    }
                    <hr />

                    {
                        (rowCount>=2) &&
                        <div className={styles.dashRows}>
                            <div>2</div>
                            <div>Mathematics</div>
                            <div>Prateek Shukla</div>
                            <div>Delhi-East</div>
                            <div>Free</div>
                        </div>
                    }
                    <hr />

                    {
                        (rowCount>=3) &&
                        <div className={styles.dashRows}>
                            <div>3</div>
                            <div>Mathematics</div>
                            <div>Yogesh Bhat</div>
                            <div>Delhi-East</div>
                            <div>Free</div>
                        </div>
                    }
                    <hr />

                    {
                        (rowCount>=4) &&
                        <div className={styles.dashRows}>
                            <div>4</div>
                            <div>Mathematics</div>
                            <div>Yogesh Bhat</div>
                            <div>Delhi-East</div>
                            <div>Paid</div>
                        </div>
                    }
                    <hr />

                </div>
            </div>

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
                            <Button onClick={()=>handleBookDemo(item._id) } variant="contained" color="secondary" size="large" disableElevation>
                                Free Trial
                            </Button> {" "}
                            <Button onClick={handlePayNow} variant="contained" color="secondary" size="large" disableElevation>
                                Proceed To Pay
                            </Button>
                        </div>
                    ))
                }
            </div>

            {/* {
                (demoCount<=3) && (canBook) &&
                <div className={styles.bgCard}>
                    <div className={styles.demoModalCard}>
                        { (demoCount<3) ? `You have successfully booked a free demo class. You can book ${3-demoCount} more classes.` : `You have successfully booked a free demo class. This is your last demo class.` }
                    </div>
                </div>
            } */}
        </div>
    );
};

export default Tutor;