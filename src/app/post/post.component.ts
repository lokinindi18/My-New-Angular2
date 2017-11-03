import { NotFoundAppError } from './../common/errors/not.found.error';
import { AppError } from './../common/errors/app.error';
import { PostsService } from './../services/posts/posts.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'post-compo',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any[];
  error: string;
  constructor(private postService: PostsService) {
  }

  ngOnInit() {
    this.postService.getAll().
      subscribe(
      allPosts => {
        this.posts = allPosts;
      });
    // global error handler with catch any unhandled exceptions
  }

  onCreatePost(input: HTMLInputElement) {
    // tslint:disable-next-line:prefer-const
    let data = { title: input.value };
    this.postService.create(data).
      subscribe(
        newPost => {
          console.log('-----> response after create:- ' + newPost);
          data['id'] = newPost.id;
          this.posts.splice(0, 0, data);
        },
        (error: AppError) => {
          console.log('-----> Unexpected error occurred in onDeletePost():- ' + error);
          // you can also set error on a specific formgroup or formcontrol
          // this.form.setErrors(error.myErrorMsg) OR this.form.get('formcontrol-name').setErrors(error.myErrorMsg)

          if (error instanceof NotFoundAppError) {
            this.error = 'Bad data exception.';
          }
          // tslint:disable-next-line:one-line
          else {
            throw error;
            // global error handler with catch any unhandled exceptions
          };
        });
    input.value = '';
  }

  onDeletePost(post: any) {
    this.postService.delete(post.id).
      subscribe(
      // as delete doesn't return any json, using empty parenthesis
      () => {
        console.log('-----> response after delete:- ' + post.id);
        // tslint:disable-next-line:prefer-const
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: AppError) => {
        // you can also set error on a specific formgroup or formcontrol
        // this.form.setErrors(error.myErrorMsg) OR this.form.get('formcontrol-name').setErrors(error.myErrorMsg)
        console.log('-----> Unexpected error occurred in onDeletePost():- ' + error);
        if (error instanceof NotFoundAppError) {
          this.error = 'No record exists with post id:- ' + post.id;
        }
        // tslint:disable-next-line:one-line
        else {
          throw error;
          // global error handler with catch any unhandled exceptions
        }
      });
  }




}
