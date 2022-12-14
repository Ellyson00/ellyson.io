import {Button, IconButton} from "@material-ui/core";
import {Facebook, Instagram, LinkedIn, Mail, Twitter} from "@material-ui/icons";
import {Link} from "react-router-dom";

export default function () {
   return <>
        <div className={"header"}>
            <div className={"innerHeader"}>
                <div>
                    <Button color="primary">
                        <Link to={"/"}>Home</Link>
                    </Button>
                </div>
                <div>
                    <Button color="primary">
                        <Link to={"/projects"}>Portfolio</Link>
                    </Button>
                </div>
                <IconButton href='https://www.instagram.com/andy_sushket/' target='_blank'>
                    <Instagram />
                </IconButton>
                <IconButton href='https://www.facebook.com/Just.Ellyson/' target='_blank'>
                    <Facebook />
                </IconButton>
                <IconButton href='https://twitter.com/_Ellyson_' target='_blank'>
                    <Twitter />
                </IconButton>
                <IconButton href='https://www.linkedin.com/in/andrii-sushket/' target='_blank'>
                    <LinkedIn />
                </IconButton>
                <IconButton>
                    <Mail />
                </IconButton>
            </div>
        </div>
    </>
}