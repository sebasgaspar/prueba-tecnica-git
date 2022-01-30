import { InputAtomProps } from '../../Interfaces';

export function InputAtom(props: InputAtomProps): JSX.Element {

    return (
        <div>
            <label htmlFor={props.name} className="p-4 text-slate-700 font-bold text-2xl float-left">{props.label}</label>
            <input className="w-11/12 px-4 py-3 mx-3 text-slate-700 border border-black rounded-xl"
                type={props.type}
                name={props.name}
                value={props.value}
                required={props.required}
                onChange={props.onChange}
                placeholder={props.placeholder}
                autoComplete='off'
            />
        </div>
    )
}