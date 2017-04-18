
import { Component, OnInit } from '@angular/core';
import { PostService } from "./post.service";

@Component({
    selector: 'posts',
    templateUrl: 'posts.component.html',
    styleUrls: ['posts.component.css'],
    providers: [PostService]
})

export class PostsComponent implements OnInit {
    posts: any[];
    postsLoading = true;
    commentLoading;
    currentPost;

    constructor(private _postService: PostService) { }

    ngOnInit() { 
        this._postService.getPosts()
            .subscribe(posts => this.posts = posts,
            null,
            () => { this.postsLoading = false; });
    }

    select(post){
        this.commentLoading = true;
        this.currentPost = post;

        this._postService.getComments(post.id)
                .subscribe(comments => 
                    this.currentPost.comments = comments,
                    null,
                    () => {this.commentLoading = false; });
    }
}