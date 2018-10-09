const EnhanceButton = LoadWebsite(Button),
      EnhanceLink = LoadWebsite(Link),
      EnhanceLogo = LoadWebsite(Logo);

class Content extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(EnhanceButton, { label: "propslabel" }),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(EnhanceLink, null),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(EnhanceLogo, null),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("iframe", { id: "iframe", src: "", width: "600", height: "500" })
        );
    }
}