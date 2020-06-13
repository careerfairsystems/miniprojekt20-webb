import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import EmailTextField from './EmailTextField';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

function LoginBox() {
    return (
        <div>
            <Container maxWidth='xs' >
                <Card>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Login
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <form autoComplete="off">
                                <EmailTextField></EmailTextField>
                                <TextField
                                    id="passwordField"
                                    label="Password"
                                    type="password"
                                ></TextField>
                            </form>
                            <Button
                                variant="contained"
                                color="primary"
                            >
                                Continue
                            </Button>
                        </CardActions>
                    </CardActionArea>
                </Card>
            </Container>
        </div>
    );
}

export default LoginBox;