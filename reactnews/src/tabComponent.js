import React, { Component } from 'react';
import { Row, Tabs, Tab } from 'react-bootstrap';

class TabComponent extends Component {
    render() {
        return (
            <Tabs defaultActiveKey="home" onSelect={this.props.tabClick} id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Home">
                    <Row>
                        {this.props.newsCards}
                    </Row>
                </Tab>
                <Tab eventKey="business" title="ビジネス">
                    <Row>
                        {this.props.newsCards}
                    </Row>
                </Tab>
                <Tab eventKey="entertainment" title="エンタメ" >
                    <Row>
                        {this.props.newsCards}
                    </Row>
                </Tab>
                <Tab eventKey="health" title="健康" >
                    <Row>
                        {this.props.newsCards}
                    </Row>
                </Tab>
                <Tab eventKey="science" title="サイエンス" >
                    <Row>
                        {this.props.newsCards}
                    </Row>
                </Tab>
                <Tab eventKey="sports" title="スポーツ" >
                    <Row>
                        {this.props.newsCards}
                    </Row>
                </Tab>
                <Tab eventKey="technology" title="テクノロジー" >
                    <Row>
                        {this.props.newsCards}
                    </Row>
                </Tab>
            </Tabs>
        )
    }
}
export default TabComponent