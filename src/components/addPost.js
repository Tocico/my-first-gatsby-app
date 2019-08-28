import React from "react"


export default class addPost extends React.Component {
    state = {
        title: '',
        date: '',
        content: ''
    }
    handleChange=(e)=>{
         const today = new Date();
         const date = today.getFullYear() + "-" +  (today.getMonth()+1)  + "-"+ today.getDate();
        console.log(date);
         this.setState({
             [e.target.id]: e.target.value,
             date: date
            });
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addPost(this.state);
        this.setState({
            title: '',
            date: '',
            content: ''
        })

    }
    render() {
        return (
            <div className="addpost-form">
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" onChange={this.handleChange} id="title"></input>
                    </div>
                    <div>
                    <label htmlFor="content">Content</label>
                    <textarea type="text" onChange={this.handleChange} id="content"></textarea>
                    </div>
                    <div>
                    <button className="post-btn">Post</button>
                    </div>
                </form>
            </div>
        )
    }
}
