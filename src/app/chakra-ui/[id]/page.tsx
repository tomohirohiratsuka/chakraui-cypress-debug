import {Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/tabs";

const ChakraUIPageServer = () => {
    const tabs = [...Array.from({length: 1000}, (_, i) => i + 1)]
    return (
        <Tabs variant={'enclosed'}>
            <TabList>
                {tabs.map((tab, index) => (
                    <Tab data-test={`tab${tab}`} key={tab}>
                        tab{tab}
                    </Tab>
                ))}
            </TabList>
            <TabPanels>
                {tabs.map((tab, index) => (
                    <TabPanel data-test={`tabPanel${tab}`} key={tab}>
                        tabPanel{tab}
                    </TabPanel>
                ))}
            </TabPanels>
        </Tabs>
    )
}

export default ChakraUIPageServer;