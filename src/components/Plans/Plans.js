import './Plans.scss';

export const Plans = function ({plan}) {
    return (
        <div className='PlanContainer'>

            <p className='Title'>{plan.title}</p>
            <hr/>

            <p className='Price'>
                <span>$</span>{plan.price}<span>99</span>
            </p>
            <p className='Monthly'>monthly</p>

            <p className='Bill'>Billed monthly or ${plan.price * 10 + 9} per year via links in chat</p>
            <hr/>

            <div className='Pros'>
                <p className='OrderNumber'>Up to <span>{plan.order_number}</span> orders per month</p>
                <p>Orders notifications</p>
                <p>Statistics data</p>
                <p>Daily reports</p>
            </div>


        </div>
    )
}
