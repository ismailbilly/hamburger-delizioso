"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";


// const formSchema = z.object({
//   username: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
// });
// const Register = () => {
//   // 1. Define your form.
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       username: "",
//     },
//   });

//   // 2. Define a submit handler.
//   function onSubmit(values: z.infer<typeof formSchema>) {
//     // Do something with the form values.
//     // ✅ This will be type-safe and validated.
//     console.log(values);
//     }
    
//   return (
//     <>
      
//       {/* <form>
//         <input type="email" placeholder="Enter your email" />
//         <input type="password" placeholder="Enter your password" />
//         <button type="submit">Register</button>

//         <div>
//           <p>Or signup with socials</p>
//           <button>
//             <FaGoogle color="red" />
//           </button>
//         </div>
//       </form> */}
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//           <FormField
//             control={form.control}
//             name="username"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Username</FormLabel>
//                 <FormControl>
//                   <Input placeholder="shadcn" {...field} />
//                 </FormControl>
//                 {/* <FormDescription>
//                   This is your public display name.
//                 </FormDescription>
//                 <FormMessage /> */}
//               </FormItem>
//             )}
//           />
//           <Button type="submit">Submit</Button>
//         </form>
//       </Form>
      
//       <div>
//         <p>
//           Already have an account? <a href="/login">Login</a>
//         </p>
//       </div>
//     </>
//   );
// };
import { RegisterForm } from "@/components/auth/register-form";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <RegisterForm />
      </div>
    </div>
  );
}

