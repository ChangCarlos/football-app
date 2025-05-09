import { useFormik } from "formik";
import * as Yup from 'yup';


export const LoginForm: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Incorrect Email')
                .required('Required'),
            password: Yup.string()
                .required('Required')
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        },
    })

    return (
        <form onSubmit={formik.handleSubmit} className="p-4">
            <label htmlFor="email" className="text-sm font-semibold text-white">Email:</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="w-full py-2 px-4 border rounded-xl text-sm bg-transparent my-2"
            />
            {formik.touched.email && formik.errors.email ? <div><p className="text-red-900 font-semibold">{formik.errors.email}</p></div> : null}

            <label htmlFor="password" className="text-sm font-semibold text-white">Password:</label>
            <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="w-full py-2 px-4 border rounded-xl text-sm bg-transparent my-2"
            />
            {formik.touched.password && formik.errors.password ? <div><p className="text-red-900 font-semibold">{formik.errors.password}</p></div> : null}

            <button type="submit" className="cursor-pointer w-20 bg-green-900 text-white p-2 font-medium text-sm rounded mt-2 mb-2">
                Log In
            </button>
        </form>
    )
}

export const CreateAccountForm = () => {
    const formik = useFormik({
        initialValues: {
            fullName: '',
            cpf: '',
            telNumber: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            fullName: Yup.string()
                .required('Required'),
            cpf: Yup.string()
                .max(11, 'Invalid CPF')
                .required('Required'),
            telNumber: Yup.string()
                .max(11, 'Invalid Number')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .min(8, 'Must have at least 8 characters')
                .required('Required')
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        },
    })

    return (
        <form onSubmit={formik.handleSubmit} className="p-4">
            <label htmlFor="fullName" className="text-sm font-semibold text-white">Nome Completo:</label>
            <input
                id="fullName"
                name="fullName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
                className="w-full py-2 px-4 border rounded-xl text-sm bg-transparent my-2"
            />
            {formik.touched.fullName && formik.errors.fullName ? <div><p className="text-red-900 font-semibold">{formik.errors.fullName}</p></div> : null}

            <label htmlFor="cpf" className="text-sm font-semibold text-white">CPF:</label>
            <input
                id="cpf"
                name="cpf"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cpf}
                className="w-full py-2 px-4 border rounded-xl text-sm bg-transparent my-2"
            />
            {formik.touched.cpf && formik.errors.cpf ? <div><p className="text-red-900 font-semibold">{formik.errors.cpf}</p></div> : null}

            <label htmlFor="telNumber" className="text-sm font-semibold text-white">Telefone:</label>
            <input
                id="telNumber"
                name="telNumber"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.telNumber}
                className="w-full py-2 px-4 border rounded-xl text-sm bg-transparent my-2"
            />
            {formik.touched.telNumber && formik.errors.telNumber ? <div><p className="text-red-900 font-semibold">{formik.errors.telNumber}</p></div> : null}

            <label htmlFor="email" className="text-sm font-semibold text-white">Email:</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="w-full py-2 px-4 border rounded-xl text-sm bg-transparent my-2"
            />
            {formik.touched.email && formik.errors.email ? <div><p className="text-red-900 font-semibold">{formik.errors.email}</p></div> : null}

            <label htmlFor="password" className="text-sm font-semibold text-white">Password:</label>
            <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="w-full py-2 px-4 border rounded-xl text-sm bg-transparent my-2"
            />
            {formik.touched.password && formik.errors.password ? <div><p className="text-red-900 font-semibold">{formik.errors.password}</p></div> : null}

            <button type="submit" className="cursor-pointer w-20 bg-green-900 text-white p-2 font-medium text-sm rounded mt-2 mb-2">
                Sign In
            </button>
        </form>
    )
}