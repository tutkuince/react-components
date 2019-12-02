import React from 'react';
import ReactDOM from 'react-dom';

import faker from 'faker';
import ApprovalCard from "./ApprovalCard";

import CommentDetail from "./CommentDetail";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:45PM"
                    content="Good job, brother!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="John"
                    timeAgo="Today at 2:00AM"
                    content="No way! It is fantastic."
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Mick"
                    timeAgo="Yesterday at 5:00PM"
                    content="It's not bad!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));