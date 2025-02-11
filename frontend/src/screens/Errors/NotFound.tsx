import React from "react"
import { Button, Col, Flex, Layout, Row } from "antd"
import notFoundImage from '../../assets/error/not_found.png'
import { useNavigate } from "react-router-dom"
import Learner from "../../routers/Paths/Learner"
import { HomeOutlined } from "@ant-design/icons"
const NotFound : React.FC = () =>{
    const navigate = useNavigate()
    return(
     <Layout 
        style={{
            height: '98.2vh',
        }}
     > 
            <Flex
                className='h-100'
                vertical={true}
                align='center'
                justify='center'
            >
                <img 
                width={800}
                src={notFoundImage} 
                alt="Page not found"
            />
            <div>
                <Button
                    className='mt-2'
                    icon={<HomeOutlined/>}
                    onClick={() => navigate(Learner.DASHBOARD)}
                >
                Go to home page
                
                </Button>
            </div>
            </Flex>
        
     </Layout>   
    )
}

export default NotFound