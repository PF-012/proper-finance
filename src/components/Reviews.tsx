import { useState } from 'react';
import { motion } from 'motion/react';
import { Star, X, Send, Edit2, Trash2 } from 'lucide-react';

const initialReviews = [
  {
    id: 0,
    name: "The Oberoi Group",
    role: "Chennai, Delhi and Mumbai",
    content: "He served as an external auditor for The Oberoi Group, demonstrating incredible efficiency by verifying 65,900 fixed assets in just one month. We highly commend his flawless accuracy and outstanding work ethic, which greatly benefited our financial operations.",
    rating: 5,
  },
  {
    id: 1,
    name: "Piyush Kumar Singh",
    role: "Kolkata",
    content: "Has Immense Knowledge in Technical Backgrounds as he solved my Issues when i was stuck During my Stock Trading classes.",
    rating: 5,
  },
  {
    id: 2,
    name: "Ritwick Mukherjee",
    role: "Kolkata",
    content: "Fantastic Boy ever Met i learnt many things from him specially in Technical Fields and learned advanced MS Excel which he taught in a very simple manner.",
    rating: 5,
  },
  {
    id: 3,
    name: "William Celentano",
    role: "USA",
    content: "This Boy is Genuinely wonderful as he Guided me Throughout my entire Journey in Kolkata as well as a Business Consultant.",
    rating: 5,
  },
  {
    id: 4,
    name: "Ashutosh Mehta",
    role: "Delhi",
    content: "Most Satisfied by his Reporting Skills as he is one of those Creative people which are in demand as well as he is Nice Person in Real.",
    rating: 5,
  },
  {
    id: 5,
    name: "Arijit Das",
    role: "Kolkata",
    content: "He Trained Me About Advance Tally Prime with Gst free of cost and i scored 80 Marks in My Practical Examination, All Thanks to him. ❤️",
    rating: 5,
  },
  {
    id: 6,
    name: "Indrajit Saha",
    role: "Madhyamgram",
    content: "Genuinely Saying, For my father's business i needed a presentation of my financials and he Greatly presented that in low cost. Greatly Thanks to him..",
    rating: 5,
  },
  {
    id: 7,
    name: "Chaudhury P and Associates",
    role: "Kolkata",
    content: "He is one of our client and did exceptionally good in our contract - FA verification of The Oberoi Group located in Chennai, Mumbai and Delhi.",
    rating: 5,
  },
  {
    id: 8,
    name: "Oman Razi",
    role: "MBA Finance Student",
    content: "I approached him for a Financial Modeling Project given by Jobaaj Learning. After completion, I am very satisfied by his service.",
    rating: 5,
  }
];

export default function Reviews() {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [reviews, setReviews] = useState(initialReviews);
  
  const [newReviewName, setNewReviewName] = useState('');
  const [newReviewRole, setNewReviewRole] = useState('');
  const [newReviewContent, setNewReviewContent] = useState('');

  const [editingReviewId, setEditingReviewId] = useState<number | null>(null);
  const [editState, setEditState] = useState({ name: '', role: '', content: '' });

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewName.trim() || !newReviewContent.trim()) return;

    const newReview = {
      id: Date.now(),
      name: newReviewName,
      role: newReviewRole || "Client",
      content: newReviewContent,
      rating: 5, // Default to 5 stars for now
      isEditable: true,
    };

    setReviews([newReview, ...reviews]);
    setNewReviewName('');
    setNewReviewRole('');
    setNewReviewContent('');
  };

  const handleEditClick = (review: any) => {
    setEditingReviewId(review.id);
    setEditState({ name: review.name, role: review.role, content: review.content });
  };

  const handleSaveEdit = () => {
    setReviews(reviews.map(r => r.id === editingReviewId ? { ...r, ...editState } : r));
    setEditingReviewId(null);
  };

  const handleDeleteClick = (id: number) => {
    setReviews(reviews.filter(r => r.id !== id));
  };

  return (
    <section id="reviews" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-blue font-semibold tracking-wider uppercase text-sm mb-2 block">
            Testimonials
          </span>
          <h2 className="text-4xl font-serif font-bold text-brand-dark mb-6 leading-tight">
            Client Success Stories
          </h2>
          <div className="w-20 h-1 bg-brand-blue mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.slice(0, 3).map((review, index) => {
            if (editingReviewId === review.id) {
              return (
                <div key={review.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col h-full space-y-3">
                  <input value={editState.name} onChange={(e) => setEditState({ ...editState, name: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-brand-blue outline-none" placeholder="Name" />
                  <input value={editState.role} onChange={(e) => setEditState({ ...editState, role: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-brand-blue outline-none" placeholder="Location / Designation" />
                  <textarea value={editState.content} onChange={(e) => setEditState({ ...editState, content: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-brand-blue outline-none flex-1 resize-none" rows={4} placeholder="Review" />
                  <div className="flex gap-2 justify-end mt-4">
                    <button onClick={() => setEditingReviewId(null)} className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors">Cancel</button>
                    <button onClick={handleSaveEdit} className="px-4 py-2 text-sm bg-brand-blue hover:bg-blue-600 text-white rounded-md transition-colors">Save</button>
                  </div>
                </div>
              );
            }
            return (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1 text-[#F59E0B]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  {/* @ts-ignore */}
                  {review.isEditable && (
                    <div className="flex gap-2">
                      <button onClick={() => handleEditClick(review)} className="text-gray-400 hover:text-brand-blue transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDeleteClick(review.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed italic flex-1">
                  "{review.content}"
                </p>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={() => setShowAllReviews(true)}
            className="inline-flex items-center justify-center px-8 py-3 bg-brand-dark text-white rounded-md font-medium hover:bg-gray-800 transition-colors"
          >
            Read All Client Success Stories
          </button>
        </div>
      </div>

      {/* All Reviews Modal */}
      {showAllReviews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-5xl max-h-[85vh] flex flex-col overflow-hidden text-brand-dark shadow-2xl relative">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h2 className="text-2xl font-bold font-serif">Client Success Stories</h2>
              <button onClick={() => setShowAllReviews(false)} className="p-2 hover:bg-gray-200 rounded-full transition-colors self-start">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto flex-1 bg-gray-50/50">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((review, index) => {
                  if (editingReviewId === review.id) {
                    return (
                      <div key={review.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col h-full space-y-3">
                        <input value={editState.name} onChange={(e) => setEditState({ ...editState, name: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-brand-blue outline-none text-sm" placeholder="Name" />
                        <input value={editState.role} onChange={(e) => setEditState({ ...editState, role: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-brand-blue outline-none text-sm" placeholder="Location / Designation" />
                        <textarea value={editState.content} onChange={(e) => setEditState({ ...editState, content: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-brand-blue outline-none flex-1 resize-none text-sm" rows={4} placeholder="Review" />
                        <div className="flex gap-2 justify-end mt-4">
                          <button onClick={() => setEditingReviewId(null)} className="px-3 py-1.5 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors">Cancel</button>
                          <button onClick={handleSaveEdit} className="px-3 py-1.5 text-xs bg-brand-blue hover:bg-blue-600 text-white rounded-md transition-colors">Save</button>
                        </div>
                      </div>
                    );
                  }
                  return (
                    <div
                      key={review.id}
                      className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col h-full"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex gap-1 text-[#F59E0B]">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                        {/* @ts-ignore */}
                        {review.isEditable && (
                          <div className="flex gap-2">
                            <button onClick={() => handleEditClick(review)} className="text-gray-400 hover:text-brand-blue transition-colors">
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button onClick={() => handleDeleteClick(review.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        )}
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed italic text-sm flex-1">
                        "{review.content}"
                      </p>
                      <div>
                        <h4 className="font-bold text-brand-dark text-base">{review.name}</h4>
                        <p className="text-xs text-gray-500">{review.role}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end">
              <button onClick={() => setShowAllReviews(false)} className="px-6 py-2 bg-brand-blue text-white rounded-md font-medium hover:bg-blue-600 transition-colors">Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
