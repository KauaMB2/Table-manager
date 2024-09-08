interface ModalProps{
    children: React.ReactNode
    modalTitle:string
    handleCloseModal:()=>void
}

const Modal: React.FC<ModalProps>  = ({ modalTitle, children, handleCloseModal }) => {
    return (
        <div style={ modalTitle !=="" ? { display:"block" } : {}} id="myModal" className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <span onClick={handleCloseModal} className="close">&times;</span>
                    <h2>{ modalTitle }</h2>
                </div>
                <div className="modal-body">
                {children}
                </div>
                <div className="modal-footer">
                    <button onClick={handleCloseModal}>Voltar</button>
                </div>
            </div>
        </div>
    )
}

export default Modal