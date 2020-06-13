import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import EmailTextField from './EmailTextField';

function EmailInputBox() {

    return (
        <div>
            <Container maxWidth='xs' >
                <Card>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Sign Up
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <form autoComplete="off">
                                <EmailTextField></EmailTextField>
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

export default EmailInputBox;