function PersonDetailHeading({ headingText }: { headingText: String }) {
    return <td className="text-xs text-white align-middle">{headingText.toUpperCase()}</td>;
}

function PersonDetailText({ detailText }: { detailText: string }) {
    return <td className="pl-5 text-white align-middle font-mono">{detailText}</td>
}

function PersonDetail({ headingText, detailText }: { headingText: String, detailText: string }) {
    return <tr>
        <PersonDetailHeading headingText={headingText} />
        <PersonDetailText detailText={detailText} />
    </tr>;
}

export { PersonDetail }