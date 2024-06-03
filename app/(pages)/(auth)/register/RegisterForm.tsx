'use client'

import CardWrapper from "@/components/global/card-wrapper"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RegisterSchema } from "@/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const RegisterForm = () => {
  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: ""
    }
  })

  const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
    console.log(data)
  }

  return (
        <CardWrapper
        label="Create an account"
        title="Register"
        backButtonHref="/login"
        backButtonLabel="Already have an account? Login here">
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField 
              control={form.control}
              name="email"
              render = {({field}) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} placeholder="user@example.com"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              />

              <FormField 
              control={form.control}
              name="name"
              render = {({field}) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              />

              <FormField 
              control={form.control}
              name="password"
              render = {({field}) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} placeholder="******"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              />

              <FormField 
              control={form.control}
              name="confirmPassword"
              render = {({field}) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} placeholder="******"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              />
              <Button className="w-full" type="submit">Register</Button>
            </div>
          </form>
        </Form>

        </CardWrapper>
  )
}

export default RegisterForm