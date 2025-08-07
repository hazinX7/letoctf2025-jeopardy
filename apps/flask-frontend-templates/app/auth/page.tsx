"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, ArrowLeft } from 'lucide-react'
import Link from "next/link"

export default function AuthPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            На главную
          </Link>
        </div>

        <Card className="bg-slate-800/50 border-green-800/30 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-lg mx-auto mb-4"></div>
            <CardTitle className="text-2xl text-white">Добро пожаловать</CardTitle>
            <CardDescription className="text-green-100">
              Войдите в свой аккаунт или создайте новый
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-slate-700/50">
                <TabsTrigger value="login" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                  Вход
                </TabsTrigger>
                <TabsTrigger value="register" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                  Регистрация
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-green-100">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-slate-700/50 border-green-800/30 text-white placeholder:text-green-300/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-green-100">Пароль</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="bg-slate-700/50 border-green-800/30 text-white placeholder:text-green-300/50 pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 text-green-400 hover:text-green-300"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" className="border-green-600 data-[state=checked]:bg-green-600" />
                    <Label htmlFor="remember" className="text-sm text-green-100">
                      Запомнить меня
                    </Label>
                  </div>
                  <Link href="#" className="text-sm text-green-400 hover:text-green-300">
                    Забыли пароль?
                  </Link>
                </div>
                <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
                  Войти
                </Button>
              </TabsContent>

              <TabsContent value="register" className="space-y-4 mt-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-green-100">Имя</Label>
                    <Input
                      id="firstName"
                      placeholder="Иван"
                      className="bg-slate-700/50 border-green-800/30 text-white placeholder:text-green-300/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-green-100">Фамилия</Label>
                    <Input
                      id="lastName"
                      placeholder="Иванов"
                      className="bg-slate-700/50 border-green-800/30 text-white placeholder:text-green-300/50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="registerEmail" className="text-green-100">Email</Label>
                  <Input
                    id="registerEmail"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-slate-700/50 border-green-800/30 text-white placeholder:text-green-300/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="registerPassword" className="text-green-100">Пароль</Label>
                  <div className="relative">
                    <Input
                      id="registerPassword"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="bg-slate-700/50 border-green-800/30 text-white placeholder:text-green-300/50 pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 text-green-400 hover:text-green-300"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-green-100">Подтвердите пароль</Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="bg-slate-700/50 border-green-800/30 text-white placeholder:text-green-300/50 pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 text-green-400 hover:text-green-300"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" className="border-green-600 data-[state=checked]:bg-green-600" />
                  <Label htmlFor="terms" className="text-sm text-green-100">
                    Я согласен с{' '}
                    <Link href="#" className="text-green-400 hover:text-green-300">
                      условиями использования
                    </Link>
                  </Label>
                </div>
                <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
                  Создать аккаунт
                </Button>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-green-800/30"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-slate-800 px-2 text-green-100"></span>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {/* <Button variant="outline" className="border-green-800/30 text-green-100 hover:bg-green-600 hover:text-white">
                  Google
                </Button>
                <Button variant="outline" className="border-green-800/30 text-green-100 hover:bg-green-600 hover:text-white">
                  GitHub
                </Button> */}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
