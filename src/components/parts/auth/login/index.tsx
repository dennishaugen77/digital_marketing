import { Dialog } from "@/components/atoms/dialog"
import { useForm, SubmitHandler } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { FC, useState } from "react"
import { Input } from "@/components/atoms/input"
import { Button } from "@/components/atoms/button"
import { AuthApi } from "@/api/auth.api"
import { useDispatch } from "react-redux"
import { authActions } from "@/store/auth/auth.slice"
import { toast } from "react-toastify"

interface LoginDialogProps {
  isOpen: boolean
  onClose: () => void
  goto: () => void
}

const schema = yup
  .object({
    email: yup.string().label("Email").email().trim().required(),
    password: yup.string().label("Password").trim().required(),
  })
  .required()

interface ILoginForm {
  email: string
  password: string
}

export const LoginDialog: FC<LoginDialogProps> = ({
  isOpen,
  onClose,
  goto,
}) => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginForm>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    const { email, password } = data

    setLoading(true)
    AuthApi.login(email, password)
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

        <div className="flex items-center justify-end">
          <Button type="submit" loading={loading}>
            Submit
          </Button>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-center">Do you have not an account?</p>
          <p className="text-primary cursor-pointer text-center" onClick={goto}>
            Create an account
          </p>
        </div>
      </form>
    </Dialog>
  )
}
