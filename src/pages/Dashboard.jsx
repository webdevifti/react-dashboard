import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Chart from 'react-apexcharts'
import Table from '../components/table/Table'
import Statuscard from '../components/status-card/Statuscard'
import Badge from '../components/badge/Badge'
import statusCards from '../assets/JsonData/status-card-data.json'
import ThemeAction from '../redux/actions/ThemeAction'

const chartOptions = {
    series: [{
        name: 'Online Customers',
        data: [40,70,20,90,35,80,30,91,60]
    },
    {
        name: 'Store Customers',
        data: [40,30,70,80,40,16,40,20,52,10]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }

    }
}

const topCustomers = {
    head: [
        'user',
        'total orders',
        'total spending'
    ],
    body: [
        {
            "username": "John Deo",
            "order": "90",
            "price": "$12,454"
        },
        {
            "username": "John Deo",
            "order": "90",
            "price": "$12,454"
        },
        {
            "username": "John Deo",
            "order": "90",
            "price": "$12,454"
        },
        {
            "username": "John Deo",
            "order": "90",
            "price": "$12,454"
        },
        {
            "username": "John Deo",
            "order": "90",
            "price": "$12,454"
        }
    ]
}

const renderCustomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderCustomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
)

const latestOrders = {
    header: [
        "order_id",
        "user",
        "Total Price",
        "Date",
        "Status"
    ],
    body: [
        {
            id: "#OD0001",
            user: "John Deo",
            date: "02 Dec 2021",
            price: "$100",
            status: "Refund"
        },
        {
            id: "#OD0002",
            user: "Donald Deo",
            date: "30 Nov 2021",
            price: "$98.5",
            status: "Paid"
        },
        {
            id: "#OD0003",
            user: "John Deo",
            date: "02 Dec 2021",
            price: "$100",
            status: "Pending"
        },
        {
            id: "#OD0004",
            user: "Tom Crus",
            date: "01 Dec 2021",
            price: "$90",
            status: "Shipping"
        }
    ]
}


const orderStatus = {
    "Shipping": "primary",
    "Pending": "warning",
    "Paid": "success",
    "Refund": "danger"
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)
const renderOrderBody = (item,index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>
           <Badge type={orderStatus[item.status]} content={item.status} />
        </td>
    </tr>
)


const Dashboard = () => {

    const themeReducer = useSelector(state => state.ThemeReducer.mode)



    return (
        <div>
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                    {
                        statusCards.map((item, index) => (
                            <div className="col-6" key={index}>
                                <Statuscard
                                    icon={item.icon}
                                    count={item.count}
                                    title={item.title}
                                />
                            </div>
                        ))
                    }
                    </div>
                </div>
            
                <div className="col-6">
                    <div className="card full-height">
                        <Chart
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: { mode: 'dark' }
                            } : {
                                ...chartOptions.options,
                                theme: { mode: 'light' }
                            }}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card__header">
                            <h3>Top Customers</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={topCustomers.head}
                                renderHead={(item, index) => renderCustomerHead(item,index)}
                                bodyData={topCustomers.body}
                                renderBody={(item, index) => renderCustomerBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to="/">View all</Link>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="card">
                        <div className="card__header">
                            <h3>Latest Orders</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={latestOrders.header}
                                renderHead={(item, index) => renderOrderHead(item,index)}
                                bodyData={latestOrders.body}
                                renderBody={(item, index) => renderOrderBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to="/">View all</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
