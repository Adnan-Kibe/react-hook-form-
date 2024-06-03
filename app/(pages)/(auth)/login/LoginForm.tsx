'use client'

import CardWrapper from "@/components/global/card-wrapper"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { LoginSchema } from "@/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useFormStatus } from "react-dom"
import { z } from "zod"
import { useState } from "react"

const LoginForm = () => {
  const [loading, setLoading] = useState(false)
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    setLoading(true)
    console.log(data)
  }

  const { pending } = useFormStatus()

  return (
    <CardWrapper 
    label="Login to your account"
    title="Login"
    backButtonHref="/register"
    backButtonLabel="Don't have an account? Register here.">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField 
            control={form.control}
            name="email"
            render={({field}) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} placeholder="user@example.com"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}/>

            <FormField
            control={form.control}
            name="password"
            render={({field}) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} placeholder="******" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <Button type="submit" className="w-full" disabled={pending}>
              { loading ? "Loading...." : "Log in" }
            </Button>
          </div>
        </form>
      </Form>
    </CardWrapper>
  )
}

export default LoginForm