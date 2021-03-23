import {posts,user,comments} from './data'
import uuid from 'uuid'

// Resolvers
export const resolvers = {
    Query: {
        User(parent,args,ctx,info) {
            if(!args.search){
                return user;
            }
        },
       Post(parent,args,ctx,info) {
           if(!args.search){
               return posts;
           }

           return posts.filter((post) => {
               const title =  post.title.toLocaleLowerCase().includes(args.search.toLocaleLowerCase());
               const body = post.body.toLocaleLowerCase().includes(args.search.toLocaleLowerCase());

               return title || body
           })
       } 
     },
     //Mutation//
     Mutation: {
        createUser(parent, args, ctx, info) {
          const isEmail =  takenEmail(args.email)
          if(isEmail) {
              throw new Error("Email is taken")
          }
          console.log(args)
            const user1 = {
                id: "dcsdavsd",
                name: args.name,
                email: args.email,
                
            }
             user.push(user1)

            return user1
        }
     },
 // outside the Query Object //
     post: {
        author(parent, args, ctx, info) {
            return user.find((user) => {
                return user.id === parent.author

            })  
        },
        comment(parent,args,ctx,info) {
            return comments.filter((comment) => { return comment.id === parent.id})
        }
      },

      user: {
          comment(parent,args,ctx,info) {
              return comments.filter((comment) => comment.userId === parent.id)
          },

          post(parent,args,ctx,info) {
              return posts.filter((post) => post.userPostId === parent.id)
          }
      }
     
    }
   
    const takenEmail = (email) => user.some((user) => user.email === email ) 
    
    