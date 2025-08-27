import { FC, useState } from "react"
import { useDispatch } from "react-redux"
import { yupResolver } from "@hookform/resolvers/yup"
import { Dialog } from "@/components/atoms/dialog"
import { useForm, SubmitHandler } from "react-hook-form"
import { authActions } from "@/store/auth/auth.slice"
import { Button } from "@/components/atoms/button"
import * as yup from "yup"
import { Input } from "@/components/atoms/input"
import { AuthApi } from "@/api/auth.api"

import { toast } from "react-toastify"

interface SignupProps {
  isOpen: boolean
  onClose: () => void
  goto: () => void
}

interface ISignupForm {
  name: string
  email: string
  password: string
  phone: string
}

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().label("Email").email().trim().required(),
    password: yup.string().label("Password").trim().required(),
    phone: yup.string().required(),
  })
  .required()

export const SignupDialog: FC<SignupProps> = ({ isOpen, onClose, goto }) => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ISignupForm>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<ISignupForm> = (data) => {
    const { email, password, name, phone } = data

    setLoading(true)
    AuthApi.register({ email, password, phone, name })
      .then(({ access_token }) => {
        dispatch(
          authActions.setToken({
            accessToken: access_token,
            refreshToken: access_token,
          }),
        )
        setLoading(false)
        toast.success("Login successful")
      })
      .catch((e) => {
        console.log("error", e)
        setLoading(false)
        toast.error(e.message)
      })
  }

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <form className="rounded-[3px] p-10" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="mb-10 text-center text-3xl">Sign In</h2>

        <p className="text-dark-blue-800 mb-4 text-base">
          Sign in to your account
        </p>

        <Input
          className="mb-4"
          label="Name"
          type="text"
          {...register("name")}
          error={errors.email?.message}
        />
        <Input
          className="mb-4"
          label="Email"
          type="text"
          {...register("email")}
          error={errors.email?.message}
        />
        <Input
          className="mb-10"
          label="Password"
          type="password"
          {...register("password")}
          error={errors.password?.message}
        />
        <Input
          className="mb-10"
          label="Phone"
          type="text"
          {...register("phone")}
          error={errors.password?.message}
        />

        <div className="flex items-center justify-end">
          <Button type="submit" loading={loading}>
            Submit
          </Button>
        </div>
        <div className="flex gap-1">
          <p className="ml-auto text-center">Go to </p>
          <p
            className="text-primary mr-auto cursor-pointer text-center"
            onClick={goto}
          >
            Signin
          </p>
        </div>
      </form>
    </Dialog>
  )
}
