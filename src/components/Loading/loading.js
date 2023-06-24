import css from './loading.module.css'

function Loading() {
    return (
        <div>
            <div className={css.loading}>Loading ...</div>
            <div className={css.ldsSpinner}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loading