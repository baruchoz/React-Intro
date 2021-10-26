import React from 'react'

export const RacerForm = (props) => {
        return (
            <form onSubmit={props.handleForm}>
                <div className="form-group">
                    <div className='row'>
                        <div className='col-12 col-sm-6'>
                            <input type='text' className='form-contorl' id='season' placeholder='Season' />
                        </div>     
                        <div className='col-12 col-sm-6'>
                            <input type='text' className='form-contorl' id='round' placeholder='Round' />
                        </div> 
                    </div>
                    
                    <div className='row pt-1 pb-2'>
                        <div className='col'>
                            <input type='submit' className='btn btn-dark' />
                        </div>
                    </div>    
                </div>
            </form>
        )
    
}
