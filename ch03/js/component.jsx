{/*
	ReactDOM.render(
		<h1>Hello world!</h1>,
		document.getElementById('content')
	)
*/}

{/*
	class HelloWorld extends React.Component {
		render() {
			return (
				<div>
					<h1> 1. Hello world! </h1>
					<h1> 2. Hello world!! </h1>
				</div>
			)
		}
	}

	ReactDOM.render(
		<HelloWorld/>,
		document.getElementById('content')
	)
*/}

{/*
	class DateTimeNow extends React.Component {
		render() {
			let dateTimeNow = new Date().toLocaleString()
			return (
				<div>
					<span>Current Date and Time is {dateTimeNow}.</span>
					<br/>
					<p>Current time in your locale is {new Date(Date.now()).toLocaleTimeString()}</p>
				</div>
			)
		}
	}

	ReactDOM.render(
		<DateTimeNow/>,
		document.getElementById('content')
	)

*/}

{/*
	class DateTimeNow extends React.Component {
		render() {
			let dateTimeNow = new Date().toLocaleString()
			return (
				<div>
					<span>Current Date and Time is {dateTimeNow}.</span>
					<br/>
					<p>Current time in your locale is {new Date(Date.now()).toLocaleTimeString()}</p>
				</div>
			)
		}
	}

	class ProfileLink extends React.Component {
		render() {
			return (
				<div>
					<a href={this.props.url} title={this.props.title} target="_balnk"> 전달받은 속성 text 값: {this.props.text} </a>
					<br/>
					<data-customtag>이것은 비표준 태그입니다</data-customtag>
				</div>
			)
		}
	}

	ReactDOM.render((
		<div>
			<a href="http://www.google.com"> Click to Google </a>
			<br/>
			<ProfileLink url="http://www.naver.com" title="속성넘기기" text="이것은 넘기는 text값입니다"/>
		</div>
		),
		document.getElementById('content')
	)
*/}

{/*
//warning 발생: Warning: Unknown prop `frameworkName` on <h1> tag. Remove this prop from 	
	class HelloWorld extends React.Component {
		render() {
			return <h1 {...this.props}> Hello {this.props.frameworkName} world!!</h1>
		}
	}



	ReactDOM.render(
		<div>
			<HelloWorld 
			id='ember'
			frameworkName='Ember.js'
			title='A framework fro creating ambitious web applications.'/>

			<HelloWorld
			id='backbone'
			frameworkName='Backbone.js'
			title='Backbon.js gives structure to web applications...'
			/>

			<HelloWorld
			id='angular'
			frameworkName='Angular.js'
			title='Superheroic JavaScript to web applications'
			/>
		</div>
		,document.getElementById('content')
	)
*/}

class Content extends React.Component {
	getUrl() {
		return "http://www.google.com"
	}
	render() {
		return (
			<p> call component method <a href={this.getUrl()}> go to {this.getUrl()} </a></p>
		)
	}
}

ReactDOM.render(
	<Content/>
	,document.getElementById('content')
)