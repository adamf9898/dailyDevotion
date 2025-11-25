/**
 * Daily Devotion Content Data
 * A collection of devotional readings organized by date
 */
const devotions = [
    {
        id: 1,
        title: "Finding Peace in Troubled Times",
        verse: "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.",
        reference: "John 14:27",
        content: `<p>In a world filled with uncertainty and chaos, Jesus offers us something different—His peace. This isn't a peace that depends on our circumstances or the absence of problems. It's a supernatural calm that guards our hearts even in the midst of life's storms.</p>
        <p>The peace Jesus gives is not temporary or conditional. It doesn't fluctuate with the stock market or depend on the news headlines. It's a deep, abiding sense of security that comes from knowing we are loved by God and held in His hands.</p>
        <p>Today, whatever challenges you face, remember that you have access to a peace that surpasses all understanding. You don't have to be troubled. You don't have to be afraid. His peace is yours for the taking.</p>`,
        prayer: "Lord, thank You for the gift of Your peace. Help me to receive it fully today and to rest in the knowledge that You are in control. Calm my anxious thoughts and fill my heart with Your supernatural peace. Amen."
    },
    {
        id: 2,
        title: "The Power of Gratitude",
        verse: "Give thanks in all circumstances; for this is God's will for you in Christ Jesus.",
        reference: "1 Thessalonians 5:18",
        content: `<p>Gratitude is more than a feeling—it's a choice. Paul doesn't tell us to give thanks FOR all circumstances, but IN all circumstances. Even when life is hard, we can find reasons to be thankful.</p>
        <p>A grateful heart transforms our perspective. It shifts our focus from what we lack to what we have, from our problems to our blessings, from our weaknesses to God's strength.</p>
        <p>Start today by naming three things you're grateful for. Watch how this simple practice begins to change your outlook and bring more joy into your daily life.</p>`,
        prayer: "Father, forgive me for the times I've focused on my problems instead of Your blessings. Open my eyes to see the countless gifts You give me each day. Cultivate in me a heart of gratitude that overflows with praise. Amen."
    },
    {
        id: 3,
        title: "Walking by Faith",
        verse: "For we walk by faith, not by sight.",
        reference: "2 Corinthians 5:7",
        content: `<p>Faith means trusting God even when we can't see the full picture. It's taking the next step even when the path ahead seems unclear. It's believing in God's promises even when our circumstances suggest otherwise.</p>
        <p>Walking by faith doesn't mean we have all the answers. It means we trust the One who does. We may not know what tomorrow holds, but we know who holds tomorrow.</p>
        <p>Today, God may be calling you to step out in faith in some area of your life. Perhaps it's a relationship, a career decision, or a ministry opportunity. Whatever it is, remember that faith is not the absence of fear—it's moving forward despite it.</p>`,
        prayer: "Lord, increase my faith. Help me to trust You more deeply and to step out boldly when You call. Give me courage to walk by faith even when I can't see what lies ahead. I put my confidence in You. Amen."
    },
    {
        id: 4,
        title: "The Gift of Grace",
        verse: "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast.",
        reference: "Ephesians 2:8-9",
        content: `<p>Grace is God's unmerited favor. It's receiving what we don't deserve and couldn't earn. Salvation is not a reward for the good we've done, but a gift from a loving God.</p>
        <p>Many of us struggle with feeling like we need to earn God's love. We think if we just pray more, serve more, or give more, then God will accept us. But the beautiful truth is that God already loves us completely—not because of anything we've done, but because of who He is.</p>
        <p>Rest in grace today. You don't have to perform to be loved. You don't have to achieve to be accepted. God's grace is sufficient for you.</p>`,
        prayer: "Heavenly Father, thank You for Your amazing grace. Help me to fully receive this gift and to stop trying to earn what You have freely given. Let Your grace transform me from the inside out. Amen."
    },
    {
        id: 5,
        title: "Strength in Weakness",
        verse: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly about my weaknesses, so that Christ's power may rest on me.",
        reference: "2 Corinthians 12:9",
        content: `<p>Our culture celebrates strength and success. We hide our weaknesses and put on brave faces. But God works differently. He chooses to display His power through our weaknesses.</p>
        <p>When we acknowledge our limitations, we create space for God's strength to shine. Our struggles become opportunities for His grace to be demonstrated. Our failures become platforms for His redemption.</p>
        <p>Don't be discouraged by your weaknesses today. Instead, see them as invitations for God's power to be revealed in your life. In your weakness, He is strong.</p>`,
        prayer: "Lord, I bring my weaknesses before You today. Instead of hiding them, I offer them to You. Let Your power rest on me and shine through my limitations. Use my struggles for Your glory. Amen."
    },
    {
        id: 6,
        title: "Loving Your Neighbor",
        verse: "Love your neighbor as yourself.",
        reference: "Mark 12:31",
        content: `<p>Jesus was asked which commandment was the greatest. After stating our first priority—loving God—He immediately pointed to loving others. Our vertical relationship with God is inseparable from our horizontal relationships with people.</p>
        <p>Loving our neighbor means seeing others with compassion, treating them with dignity, and serving their needs even when it's inconvenient. It means choosing kindness over criticism, understanding over judgment.</p>
        <p>Who is your neighbor today? It might be a family member, a coworker, a stranger in line at the store, or even someone who has wronged you. How can you show them love in a practical way?</p>`,
        prayer: "Jesus, give me Your eyes to see those around me. Help me to love others as You love them—unconditionally and sacrificially. Show me one specific way I can love my neighbor today. Amen."
    },
    {
        id: 7,
        title: "The Shepherd's Care",
        verse: "The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul.",
        reference: "Psalm 23:1-3",
        content: `<p>Sheep are completely dependent on their shepherd for protection, provision, and direction. Without a shepherd, they would wander, get lost, or fall prey to predators. David understood this well as a former shepherd himself.</p>
        <p>When we acknowledge the Lord as our Shepherd, we're admitting our need for His guidance and care. We're trusting Him to lead us to places of rest and refreshment, even through difficult valleys.</p>
        <p>Are you trying to navigate life on your own? Are you exhausted from trying to figure everything out? Today, let the Shepherd lead. Let Him restore your soul and guide you to green pastures.</p>`,
        prayer: "Lord, You are my Shepherd. I surrender control and trust Your leading. Refresh my weary soul today and guide my steps. Help me to follow You closely and rest in Your care. Amen."
    },
    {
        id: 8,
        title: "Forgiveness and Freedom",
        verse: "Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you.",
        reference: "Colossians 3:13",
        content: `<p>Forgiveness is not easy. When someone hurts us, our natural response is to hold onto that pain, to nurse our wounds, and sometimes to seek revenge. But unforgiveness is a prison that keeps us captive while we think we're punishing others.</p>
        <p>Jesus calls us to forgive as we have been forgiven. When we remember how much God has forgiven us, it becomes easier to extend that same grace to others. Forgiveness doesn't mean condoning wrong behavior or forgetting what happened. It means releasing the debt and trusting God to bring justice.</p>
        <p>Is there someone you need to forgive today? The process may take time, but it begins with a decision. Choose freedom. Choose forgiveness.</p>`,
        prayer: "Father, You have forgiven me so much. Help me to extend that same forgiveness to those who have hurt me. Release me from bitterness and set me free. Give me the strength to let go and trust You. Amen."
    },
    {
        id: 9,
        title: "Hope in Trials",
        verse: "Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance.",
        reference: "James 1:2-3",
        content: `<p>Joy in trials? This seems counterintuitive, even impossible. Yet James challenges us to shift our perspective. Trials are not just obstacles—they're opportunities for growth.</p>
        <p>When our faith is tested, it's like gold being refined in fire. The impurities are burned away, and what remains is stronger and purer. The difficulties we face today are shaping us into the people God is calling us to become.</p>
        <p>Whatever trial you're facing, know that it has purpose. God is not wasting your pain. He is developing perseverance, character, and hope within you. Hold on—your breakthrough may be closer than you think.</p>`,
        prayer: "Lord, help me to see my trials through Your eyes. Give me joy even in difficulty, knowing that You are at work. Develop perseverance in me and use this season to shape me into Christ's likeness. Amen."
    },
    {
        id: 10,
        title: "The Light of the World",
        verse: "You are the light of the world. A town built on a hill cannot be hidden. Neither do people light a lamp and put it under a bowl. Instead they put it on its stand, and it gives light to everyone in the house.",
        reference: "Matthew 5:14-15",
        content: `<p>Jesus doesn't say we should TRY to be light—He says we ARE light. When we accept Christ, His light shines within us. Our job is simply not to hide it.</p>
        <p>The world is full of darkness—fear, despair, confusion, and pain. People are searching for hope, for meaning, for direction. And God has placed you exactly where you are to be a beacon of His love and truth.</p>
        <p>How are you shining your light today? It doesn't have to be a grand gesture. A kind word, a listening ear, a helping hand—these are all ways your light can illuminate someone's darkness.</p>`,
        prayer: "Lord, let Your light shine through me today. Remove anything that dims my witness and help me to boldly reflect Your love to those around me. Use me to bring hope and truth to a world in need. Amen."
    },
    {
        id: 11,
        title: "Seeking First the Kingdom",
        verse: "But seek first his kingdom and his righteousness, and all these things will be given to you as well.",
        reference: "Matthew 6:33",
        content: `<p>In a world consumed with acquiring more—more money, more status, more possessions—Jesus offers a radically different approach. He says when we prioritize God's kingdom above all else, everything we truly need will be provided.</p>
        <p>This doesn't mean we shouldn't work hard or plan for the future. It means we hold everything with open hands, trusting that God knows what we need better than we do. It means our identity and security come from Him, not from our bank accounts or achievements.</p>
        <p>What are you seeking today? What consumes your thoughts and energy? Ask God to realign your priorities and help you seek His kingdom first.</p>`,
        prayer: "Father, forgive me for putting other things above You. Help me to seek Your kingdom first in all areas of my life. I trust You to provide for my needs as I focus on what matters most. Amen."
    },
    {
        id: 12,
        title: "God's Unfailing Love",
        verse: "Give thanks to the Lord, for he is good; his love endures forever.",
        reference: "Psalm 107:1",
        content: `<p>God's love is not fickle. It doesn't depend on our behavior or circumstances. It doesn't grow cold when we fail or disappear when we wander. His love is steadfast, eternal, and unconditional.</p>
        <p>This truth changes everything. We don't have to fear rejection. We don't have to earn acceptance. We can approach God confidently, knowing that His love for us will never fade.</p>
        <p>Let this truth sink deep into your heart today: You are loved. Not for what you do, but for who you are—a beloved child of God. Nothing can separate you from His love.</p>`,
        prayer: "Lord, thank You for Your unfailing love. Help me to truly believe that I am loved—fully and forever. Let this truth transform how I see myself and how I live each day. Amen."
    }
];

// Export for use in other modules (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { devotions };
}
