import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 400,
        width: 300,
    },
    control: {
        padding: theme.spacing(6),
    }
}));

export function SpacingGrid(props) {
    console.log(props);
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };

    return (
        <Grid container className={classes.root} spacing={6}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    {props.monsters.map((monster) => (
                        <Grid key={monster.id} item>
                            <Paper container justify="center" className={classes.paper}>
                                <img src={`https://robohash.org/${monster.id}?set=set2`}/>
                                <h3>{monster.name}</h3>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Grid item xs={12}>
            </Grid>
        </Grid>
    );
}