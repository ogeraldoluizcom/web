'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Title } from '@/components/title'

import { contactFormSchema } from '@/schemas/contact'
import { cn } from '@/lib/utils'

export const SectionContact = () => {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      subject: '',
      email: '',
      body: ''
    }
  })

  const onSubmit = (values: z.infer<typeof contactFormSchema>) => {
    console.log(values)
  }

  return (
    <div className="space-y-4 p-8">
      <Title
        align="left"
        subtitle="Contato"
        description="Entre em contato e vamos conversar sobre o seu projeto."
      />
      <div className="rounded-md p-4 bg-indigo-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Title
              align="left"
              subtitle="Bora conversar?"
              description="Vamos trocar uma ideia sobre o seu projeto, tirar dúvidas ou até mesmo tomar um café virtual. Estou aqui para ajudar!"
            />
            <div className="flex flex-col items-center">
              <div
                className="relative flex items-center justify-center"
                style={{ width: 300, height: 300 }}
              >
                <svg
                  width="300"
                  height="300"
                  viewBox="0 0 180 180"
                  className="absolute inset-0 animate-[spin_30s_linear_infinite] pointer-events-none"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 90, 90 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                    />
                  </defs>
                  <text
                    fill="url(#gradientText)"
                    fontSize="10"
                    fontWeight="bold"
                    letterSpacing="1.4"
                  >
                    <textPath href="#circlePath" startOffset="1%">
                      • Fullstack • Frontend • Backend • Devops • Automação •
                      Frontend • Frontend • Backend • Devops • Automação •
                    </textPath>
                  </text>
                  <defs>
                    <linearGradient
                      id="gradientText"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="white" />
                      <stop offset="100%" stopColor="gray" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="z-10 text-center">
                  <p className="text-sm font-bold text-white animate-pulse">
                    Desenvolvendo soluções
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 w-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        className={cn(
                          'text-sm font-medium text-white',
                          form.formState.errors.body ? 'text-white' : ''
                        )}
                      >
                        Nome
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Seu nome"
                          className="w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-rose-950" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        className={cn(
                          'text-sm font-medium text-white',
                          form.formState.errors.body ? 'text-white' : ''
                        )}
                      >
                        Assunto
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Assunto"
                          className="w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-rose-950" />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      className={cn(
                        'text-sm font-medium text-white',
                        form.formState.errors.body ? 'text-white' : ''
                      )}
                    >
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Seu e-mail" {...field} />
                    </FormControl>
                    <FormMessage className="text-rose-950" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="body"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      className={cn(
                        'text-sm font-medium text-white',
                        form.formState.errors.body ? 'text-white' : ''
                      )}
                    >
                      Mensagem
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Escreva sua mensagem aqui..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-rose-950" />
                  </FormItem>
                )}
              />
              <div className="flex gap-4">
                <Button type="submit" variant="secondary">
                  Enviar
                </Button>
                <Button
                  type="reset"
                  variant="secondary"
                  onClick={() => form.reset()}
                >
                  Limpar
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}
