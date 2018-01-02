import {ISPList} from './HelloWorldWebPart'

export default class MockHttpClient {
    private static _items: ISPList[] = [
        {Title: "Mock item 1", Id: "1"},
        {Title: "Mock item 2", Id: "2"},
        {Title: "Mock item 3", Id: "3"}
    ];

    public static get(): Promise<ISPList[]> {
        return new Promise<ISPList[]>((resolve) => {
            resolve(MockHttpClient._items);
        });
    }
}