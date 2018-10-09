const EnhanceButton = LoadWebsite(Button),
      EnhanceLink = LoadWebsite(Link),
      EnhanceLogo = LoadWebsite(Logo);

class Content extends React.Component {
    render() {
        return(
            <div>
                <EnhanceButton label="propslabel"/>
                <br/>
                <br/>
                <EnhanceLink/>
                <br/>
                <br/>
                <EnhanceLogo/>
                <br/>
                <br/>
                <iframe id="iframe" src="" width="600" height="500"/>
            </div>
        );
    }
}